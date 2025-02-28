import React, { useState } from "react";
import "./App.css";
import ChatHistory from "./components/ChatHistory";
import ChatPrompt from "./components/ChatPrompt";
import AlertPanel from "./components/AlertPanel";
import HealthAnalysis from "./components/HealthAnalysis";
import ActionButtons from "./components/ActionButtons";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "Bedrock",
      content:
        "Your heart rate is 25% above normal. It might be due to stress or recent activity. How are you feeling right now?",
    },
    {
      sender: "User",
      content: "Hi",
    },
    {
      sender: "Bedrock",
      content:
        "Thanks for sharing. Could you also share your current activity level? (e.g., walking, running, or resting)",
    },
    {
      sender: "User",
      content: "I have high fever and runny nose",
    },
  ]);

  const healthData = {
    weight: {
      value: 72,
      unit: "kg",
      avg: 70,
    },
    steps: {
      value: 8500,
      avg: 7800,
    },
    heartRate: {
      value: 95,
      unit: "BPM",
      avg: 80,
    },
    calories: {
      value: 2200,
      unit: "kcal",
      avg: 2000,
    },
    sleep: {
      value: 6.5,
      unit: "hrs",
      avg: 7.0,
    },
  };

  const handleSendMessage = (message) => {
    // Add user message
    const newMessages = [...messages, { sender: "User", content: message }];
    setMessages(newMessages);

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          sender: "Bedrock",
          content:
            "Thank you for providing that information. Given your symptoms of fever and runny nose, I recommend resting and staying hydrated. Would you like me to provide some self-care tips for these symptoms?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="app">
      <header>
        <h1>Smart Health Consultant</h1>
      </header>

      <div className="container">
        <div className="chat-container">
          <h2>Chat with AIxpert</h2>
          <ChatHistory messages={messages} />
          <ChatPrompt onSendMessage={handleSendMessage} />
        </div>

        <div className="health-dashboard">
          <AlertPanel message="Your heart rate is 25% above normal." />
          <HealthAnalysis healthData={healthData} />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
