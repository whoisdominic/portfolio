"use client";
import React, { useState, useEffect, useRef } from "react";
import { WavingEmoji } from "./WavingEmoji";
import { Message } from "./types";

const initialMessages: Message[] = [
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
  const [messages, setMessages] = useState<Message[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

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
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      if (!res.ok || !data.response) {
        throw new Error("Failed to fetch response");
      }

      setMessages((prev) => [
        ...prev,
        {
          text: data.response,
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
