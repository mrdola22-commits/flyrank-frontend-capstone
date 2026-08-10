"use server";

import { OpenAI } from "openai";
import type { CoreMessage, TextStreamPart } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

/**
 * POST /api/chat
 *
 * Handles chat requests using OpenRouter API with streaming responses.
 * This route supports streaming responses using OpenRouter's OpenAI-compatible API.
 */

export async function POST(request: Request) {
  const { messages } = await request.json();

  if (!messages || !Array.isArray(messages)) {
    return new Response("Invalid request format", { status: 400 });
  }

  try {
    const stream = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: messages as CoreMessage[],
      temperature: 0.7,
      max_tokens: 1000,
      stream: true,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (chunk.choices[0]?.delta?.content) {
            controller.enqueue(chunk.choices[0].delta.content);
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream as unknown as ReadableStream<Uint8Array>, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}