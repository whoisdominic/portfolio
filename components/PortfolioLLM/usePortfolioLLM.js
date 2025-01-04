"use client";
import { useState, useEffect } from "react";
import { WavingEmoji } from "./WavingEmoji";

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

  useEffect(() => {
    setThinking(true);
    setTimeout(() => {
      setMessages(initialMessages);
      setThinking(false);
    }, 5000);
  }, []);

  const handleSubmit = () => {
    if (!input) return;
    setMessages((prev) => [
      ...prev,
      { text: input, side: "right", muted: true },
    ]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm still learning, please be patient 🤖", side: "left" },
      ]);
      setThinking(false);
    }, 15000);
  };

  return {
    input,
    setInput,
    thinking,
    setThinking,
    messages,
    setMessages,
    handleSubmit,
  };
};
