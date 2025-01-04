"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const ChatBubble = ({ message: { text, side, muted, extra } }) => {
  useEffect(() => {
    if (muted) return;
    // Play the notification sound when the bubble mounts
    const notificationSound = new Audio("/assets/notification-alert.mp3");
    notificationSound.play().catch((err) => {
      console.error("Failed to play sound:", err);
    });
  }, [muted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      className={`inline-flex max-w-md w-auto px-4 py-2  rounded-md p-4 text-base items-center ${
        side === "left" ? "self-start bg-accent" : "self-end bg-tritary"
      }`}
    >
      <p className={side === "left" ? "text-primary" : "text-white"}>{text}</p>
      {extra}
    </motion.div>
  );
};
