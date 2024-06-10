// src/components/Messages.js
import { Message } from "ai";
import { useRef, useEffect } from "react";

const Messages: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.role === "assistant" ? "assistant" : "user"}`}
        >
          <div className="message-icon">
            {msg.role === "assistant" ? "🤖" : "🧑‍💻"}
          </div>
          <div className="message-content">{msg.content}</div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;

