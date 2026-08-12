import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText, pipeUIMessageStreamToResponse, toUIMessageStream, convertToModelMessages } from "ai";

// Initialize OpenRouter with environment variable
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || "",
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid message format" });
  }

  try {
    const formattedMessages = await convertToModelMessages(messages);

    let systemInstruction = undefined;
    const systemMessage = formattedMessages.find(msg => msg.role === "system");
    if (systemMessage) {
      if (typeof systemMessage.content === "string") {
        systemInstruction = systemMessage.content;
      } else if (Array.isArray(systemMessage.content)) {
        systemInstruction = systemMessage.content.map(part => part.text || "").join("");
      }
    }

    const chatMessages = formattedMessages.filter(msg => msg.role !== "system");

    const result = streamText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      system: systemInstruction,
      messages: chatMessages,
      temperature: 0.7,
      maxTokens: 1000,
    });

    pipeUIMessageStreamToResponse({
      response: res,
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
