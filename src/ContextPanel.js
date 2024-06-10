
// src/components/ContextPanel.js
import React, { useState, useEffect } from 'react';

const ContextPanel: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const [context, setContext] = useState([]);

  useEffect(() => {
    const fetchContext = async () => {
      const response = await fetch("/api/context", {
        method: "POST",
        body: JSON.stringify({ messages }),
      });
      const { context } = await response.json();
      setContext(context.map((c: any) => c.id));
    };
    fetchContext();
  }, [messages]);

  return (
    <div className="context-panel">
      <h2>Context</h2>
      <ul>
        {context.map((ctx, index) => (
          <li key={index}>{ctx}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContextPanel;
