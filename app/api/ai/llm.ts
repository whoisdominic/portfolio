import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import { BasePrompt } from "./prompts";
class LLM {
  model?: ChatOpenAI;
  initialized = false;
  constructor() {
    try {
      this.model = new ChatOpenAI({
        model: "gpt-4o-mini",
        apiKey: process.env.OPENAI_API_KEY,
        maxRetries: 3,
      });
      this.initialized = true;
    } catch (error) {
      console.error(error);
      // Report error to analytics
      this.initialized = false;
    }
  }

  async invoke(input: string) {
    return this.model?.invoke([BasePrompt, new HumanMessage(input)]);
  }
}

export const llm = new LLM();
