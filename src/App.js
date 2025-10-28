import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';
import { genAIResponse } from './services/intent-service';
import { useIOSKeyboardFix } from './hooks/useIOSKeyboardFix';
import './App.css';

function App() {
  useIOSKeyboardFix();
  const [messages, setMessages] = useState([]);

  // Initial message when app loads
  useEffect(() => {
    const initMessage = {
      id: 1,
      sender: 'bot',
      text: '👋 Hi! I’m Andrew’s virtual assistant. What would you like to know?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([initMessage]);
  }, []);

  const handleSend = (text) => {
    const userMsg = {
      id: messages.length + 1,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);

    // Simulate bot response
    // Add typing indicator
    const typingMsg = {
      id: messages.length + 2,
      sender: 'bot',
      text: 'Virtual Assistant is typing...',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, typingMsg]);

    setTimeout(() => {
      // Replace typing indicator with actual bot response
      const botMsg = {
        id: messages.length + 3,
        sender: 'bot',
        text: genAIResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages.pop(); // Remove typing indicator
        return [...updatedMessages, botMsg];
      });
    }, 800); // Simulate delay for typing
  };

  return (
    <div className="app-container">
      <Header />
      <Chat messages={messages} />
      <Footer onSend={handleSend} />
    </div>
  );
}

export default App;