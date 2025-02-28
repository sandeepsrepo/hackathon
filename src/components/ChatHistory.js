import React from "react";

function ChatHistory({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.role === "assistant" ? "bedrock-message" : "user-message"
          }`}
        >
          {message.role === "assistant" && <strong>Bedrock: </strong>}
          {message.role === "user" && <strong>User: </strong>}
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;
