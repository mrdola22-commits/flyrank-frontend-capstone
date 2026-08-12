import express from "express";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText, pipeUIMessageStreamToResponse, toUIMessageStream, convertToModelMessages } from "ai";
import fs from "fs";
import path from "path";

// Load environment variables securely from .env.local and .env
function loadEnv() {
  const envFiles = [".env.local", ".env"];
  for (const file of envFiles) {
    const filePath = path.resolve(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      content.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
          const index = trimmed.indexOf("=");
          if (index !== -1) {
            const key = trimmed.substring(0, index).trim();
            let val = trimmed.substring(index + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.substring(1, val.length - 1);
            }
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        }
      });
    }
  }
}

loadEnv();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Initialize the OpenRouter model using the provider
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || "",
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid message format" });
  }

  try {
    // Convert UI messages format to Model messages
    const formattedMessages = await convertToModelMessages(messages);

    // Extract system message if present
    let systemInstruction = undefined;
    const systemMessage = formattedMessages.find(msg => msg.role === "system");
    if (systemMessage) {
      if (typeof systemMessage.content === "string") {
        systemInstruction = systemMessage.content;
      } else if (Array.isArray(systemMessage.content)) {
        systemInstruction = systemMessage.content.map(part => part.text || "").join("");
      }
    }

    // Filter out system messages from messages passed to streamText
    const chatMessages = formattedMessages.filter(msg => msg.role !== "system");

    // Get the streaming response using meta-llama model
    const result = streamText({
      model: openrouter("meta-llama/llama-3.1-8b-instruct"),
      system: systemInstruction,
      messages: chatMessages,
      temperature: 0.7,
      maxTokens: 1000,
    });

    // Pipe the stream to the response
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
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Chat API server running on http://localhost:${PORT}`);
});