import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { VolumeX, User, Bot } from "lucide-react";

/**
 * Type definitions for chat messages
 */
type Role = "user" | "assistant";

interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: Date;
}

/**
 * Chat component main interface
 */
export function Chat() {
  // File reference for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // State for scroll behavior
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  // Local state for controlling the chat input
  const [input, setInput] = useState("");

  // AI chat hook from Vercel AI SDK
  const {
    messages: aiMessages,
    status,
    sendMessage,
    stop,
  } = useChat({
    // Initial system message
    messages: [
      {
        id: "system-msg",
        role: "system" as "system" | "user" | "assistant",
        parts: [
          {
            type: "text",
            text: "You are a helpful AI assistant.",
          },
        ],
      },
    ],
  });

  // Determine if we're streaming based on status
  const isStreaming = status === "streaming" || status === "submitted";

  // Convert AI messages to our format (filter out system messages)
  const messages: Message[] = aiMessages
    .filter((msg) => msg.role === "user" || msg.role === "assistant")
    .map((msg, index) => {
      const textContent = msg.parts
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("");
      return {
        id: msg.id || `msg-${index}`,
        role: msg.role as Role,
        content: textContent,
        createdAt: new Date(),
      };
    });

  // Handle scroll events
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isAtBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll when messages change (if user is at bottom)
  useEffect(() => {
    if (shouldAutoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, shouldAutoScroll]);

  // Handle form submission
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input.trim()) {
        sendMessage({ text: input.trim() });
        setInput("");
      }
    },
    [input, sendMessage],
  );

  // Jump to latest message
  const scrollToBottom = useCallback(() => {
    setShouldAutoScroll(true);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Render message content with proper styling
  const renderMessage = (message: Message) => {
    const isUser = message.role === "user";

    return (
      <div
        key={message.id}
        className={`flex gap-3 p-3 rounded-lg max-w-full ${
          isUser
            ? "justify-end bg-indigo-500/10 border border-indigo-500/20"
            : "justify-start bg-slate-800/50 border border-slate-700/50"
        }`}
      >
        <div className="flex-shrink-0">
          {isUser ? (
            <User className="h-5 w-5 text-indigo-400" />
          ) : (
            <Bot className="h-5 w-5 text-slate-300" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm break-words ${
              isUser ? "text-white" : "text-slate-100"
            }`}
          >
            {message.content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Bot className="h-5 w-5 text-indigo-400" />
          AI Chat Assistant
        </h2>
      </div>

      {/* Messages Container */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Bot className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-200 mb-2">
              Welcome to the AI Chat
            </h3>
            <p className="text-slate-400 max-w-md">
              Ask me anything about coding, technology, or get help with your
              projects. I'll respond with streaming updates as I generate
              answers.
            </p>
          </div>
        ) : (
          messages.map(renderMessage)
        )}

        {/* Auto-scroll indicator */}
        {!shouldAutoScroll && messages.length > 0 && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-slate-300 flex items-center gap-2 z-10">
            <span>Scroll down to auto-scroll</span>
            <button
              onClick={scrollToBottom}
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Jump to latest
            </button>
          </div>
        )}

        {/* Empty div for scroll position */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={onSubmit} className="flex gap-2 p-4 border-t border-slate-700/50 bg-slate-950/50" aria-label="Chat input form">
        <input
          name="message"
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isStreaming}
          aria-label="Chat message input"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={!input.trim() || isStreaming}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          aria-label="Send message"
        >
          {isStreaming ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending...
            </div>
          ) : (
            "Send"
          )}
        </button>

        {/* Stop Generation Button */}
        {isStreaming && (
          <button
            type="button"
            onClick={stop}
            className="rounded-lg bg-slate-600/50 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-600/70 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="Stop generation"
          >
            <VolumeX className="h-5 w-5" />
          </button>
        )}
      </form>
    </div>
  );
}