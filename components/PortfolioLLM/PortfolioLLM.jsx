"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { ChatBubble } from "./ChatBubble";
import { LoadingDots } from "./LoadingDots";
import { usePortfolioLLM } from "./usePortfolioLLM";

export const PortfolioLLM = () => {
  const { input, messages, handleSubmit, setInput, thinking } =
    usePortfolioLLM();

  return (
    <div className="flex flex-col items-center justify-between space-y-4 border-white/10 bg-black/60 border rounded-md p-8 h-[600px]">
      <div className="flex flex-col self-start gap-2 h-full  w-full">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
        {thinking && <LoadingDots />}
      </div>
      <div className="flex items-center justify-between w-full gap-6">
        <Input
          className="w-full self-end"
          placeholder="Ask about Dominic ✨"
          maxLength={150}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </div>
    </div>
  );
};

export default PortfolioLLM;
