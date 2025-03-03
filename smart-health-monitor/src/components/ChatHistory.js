import React from "react";

function ChatHistory({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender === "Bedrock" ? "bedrock-message" : "user-message"
          }`}
        >
         {message.role === "assistant" && <strong>Assistant: </strong>}
          {message.role === "user"}
          <strong>You: </strong>
          {message.text}
         </div>
      ))}
    </div>
  );
}

export default ChatHistory;
