"use client";
import { useState, useEffect, useRef } from "react";
import { WavingEmoji } from "./WavingEmoji";
import { BasePrompt } from "./prompts";
import { llm } from "./llm";
import { HumanMessage } from "@langchain/core/messages";

const initialMessages = [
  {
    text: "Hi, I'm, Dominic's Ai assistant! ",
    side: "left",
    muted: true,
    extra: <WavingEmoji />,
  },
  {
    text: "You can ask anything about Dominic's background, companies he's worked for and more! Think of this like an intro call and don't be shy 😎",
    side: "left",
    muted: false,
  },
];

export const usePortfolioLLM = () => {
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  useEffect(() => {
    setThinking(true);
    setTimeout(() => {
      setMessages(initialMessages);
      setThinking(false);
    }, 5000);
  }, []);

  const handleSubmit = async () => {
    if (!input) return;
    setMessages((prev) => [
      ...prev,
      { text: input, side: "right", muted: true },
    ]);
    setInput("");
    setThinking(true);
    try {
      const messages = [BasePrompt, new HumanMessage(input)];

      if (!llm.initialized) {
        throw new Error("LLM not initialized");
      }

      const res = await llm.invoke(messages);
      setMessages((prev) => [
        ...prev,
        {
          text: res.content,
          side: "left",
          muted: false,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setThinking(false);
    }
  };

  return {
    input,
    setInput,
    thinking,
    setThinking,
    messages,
    setMessages,
    handleSubmit,
    bottomRef,
  };
};
