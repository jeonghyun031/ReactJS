import React, { useEffect, useRef, useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import { ChatForm } from './ChatForm';
import ChatMessage from './ChatMessage';

const APP = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // helper function to update chat history
    const updateHistory = (text) => {
      setChatHistory((prev) => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text }]);
    }
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history })
    }
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

      const botResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(botResponse);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  return <div className="container">
    <div className="chatbot-popup">
      <div className="chatbot-header">
        <div className="header-info">
          <ChatbotIcon />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded">keyboard_arrow_down</button>
      </div>
      {/*Chatboy body */}
      <div ref={chatBodyRef} className="chatbot-body">
        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">Hi! How can I help you?</p>
        </div>

        {/* Render the chat history dynamically */}
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}
      </div>
      <div className="chatbot-footer">
        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
      </div>
    </div>
  </div>
};

export default APP;