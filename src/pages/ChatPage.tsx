/**
 * Chat Page Component
 *
 * A full-featured page that wraps the Chat component with proper styling
 * and layout for the portfolio website.
 */

import { Chat } from "../components/chat/Chat";

export function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <Chat />
    </main>
  );
}