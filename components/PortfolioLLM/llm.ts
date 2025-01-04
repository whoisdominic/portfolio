import { AIMessageChunk } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

class LLM {
  model?: ChatOpenAI;
  initialized = false;
  constructor() {
    try {
      // this.model = new ChatOpenAI({
      //   model: "gpt-4",
      //   apiKey: process.env.OPENAI_API_KEY,
      //   maxRetries: 3,
      // });
      this.initialized = true;
    } catch (error) {
      console.error(error);
      // Report error to analytics
      this.initialized = false;
    }
  }

  async invoke(messages: string[]) {
    return this.model?.invoke(messages);
  }
}

export const llm = new LLM();
