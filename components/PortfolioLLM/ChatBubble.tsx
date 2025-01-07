"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Message } from "./types";

export const ChatBubble: React.FC<Message> = ({ text, side, muted, extra }) => {
  useEffect(() => {
    if (muted) return;
    // Play the notification sound when the bubble mounts
    const notificationSound = new Audio("/assets/notification-alert.mp3");
    notificationSound.play().catch((err) => {
      console.error("Failed to play sound:", err);
    });
  }, [muted]);
  const bubbleAlignment = side === "left" ? "self-start" : " self-end";
  const bubbleColor = side === "left" ? "bg-accent" : "bg-tritary";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      className={`inline-flex ${bubbleAlignment} px-4 rounded-md p-4 text-base items-center ${bubbleColor} sm:max-w-sm md:max-w-lg lg:max-w-xl`}
    >
      <p className={side === "left" ? "text-primary" : "text-white"}>{text}</p>
      {extra}
    </motion.div>
  );
};
