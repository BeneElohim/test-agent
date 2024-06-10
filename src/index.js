// src/pages/index.js
"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import ContextPanel from "@/components/ContextPanel";
import { useChat } from "ai/react";

const Page: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="page-container">
      <Header />
      <Chat
        input={input}
        handleInputChange={handleInputChange}
        handleMessageSubmit={handleSubmit}
        messages={messages}
      />
      <ContextPanel messages={messages} />
    </div>
  );
};

export default Page;
