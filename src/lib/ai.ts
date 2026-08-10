/**
 * AI Configuration for OpenRouter
 *
 * This module configures the OpenRouter AI provider using the Vercel AI SDK.
 * The API key must be stored in .env.local as OPENROUTER_API_KEY.
 *
 * @see https://openrouter.ai/
 */

import { createOpenRouter } from '@openrouter/ai-sdk-provider';

/**
 * OpenRouter AI provider instance
 *
 * Uses the OPENROUTER_API_KEY environment variable.
 * Obtain your API key from https://openrouter.ai/keys
 */
const apiKey = typeof globalThis !== 'undefined' && 'process' in globalThis
  ? (globalThis as any).process?.env?.OPENROUTER_API_KEY
  : '';

export const openrouter = createOpenRouter({
  apiKey,
});

/**
 * Default model for chat completions
 *
 * Using a capable instruction-tuned model from OpenRouter.
 * You can change this to other models like `meta-llama/Meta-Llama-3-11B-Instruct-Turbo`.
 */
export const defaultModel = openrouter('meta-llama/Meta-Llama-3-11B-Instruct-Turbo');

/**
 * Streaming model for chat responses
 *
 * Same model used for streaming to ensure consistency.
 */
export const streamingModel = openrouter('meta-llama/Meta-Llama-3-11B-Instruct-Turbo');

/**
 * System prompt for the AI assistant
 *
 * Configured as a helpful, concise coding assistant that provides
 * technical explanations and code examples.
 */
export const systemPrompt = `You are a helpful AI coding assistant.
Provide concise, accurate responses with code examples when relevant.
Keep explanations clear and focused on the user's question.
Limit responses to 3-4 paragraphs maximum.`;

/**
 * Chat options for the AI generation
 */
export const chatOptions = {
  model: streamingModel,
  system: systemPrompt,
  maxTokens: 1000,
  temperature: 0.7,
  topP: 1.0,
};