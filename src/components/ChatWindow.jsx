import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to support you. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const isInitialMount = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Don't auto-scroll on initial mount, only when new messages are added
    if (!isInitialMount.current) {
      scrollToBottom();
    } else {
      isInitialMount.current = false;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thank you for sharing that with me. Can you tell me more about what's been on your mind?",
        "I understand. It's completely normal to feel this way. What usually helps you when you're feeling like this?",
        "That sounds challenging. Remember, you're not alone in this. Have you tried any coping strategies recently?",
        "I appreciate you opening up. Taking care of your mental health is really important. How has your sleep been lately?",
        "It's great that you're reaching out. Sometimes talking about our feelings can really help. What's one thing that made you smile recently?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleMicClick = () => {
    // Placeholder for voice input functionality
    console.log('Voice input activated (placeholder)');
  };

  return (
    <div className="flex flex-col h-full bg-gradient-chat rounded-xl shadow-lg">
      {/* Chat Header */}
      <div className="p-4 bg-card rounded-t-xl border-b border-border">
        <h2 className="text-xl font-semibold text-foreground">Mental Health Support</h2>
        <p className="text-sm text-muted-foreground">Always here to listen</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md ${
                message.sender === 'user'
                  ? 'bg-user-bubble text-user-bubble-foreground rounded-br-sm'
                  : 'bg-bot-bubble text-bot-bubble-foreground rounded-bl-sm'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className="text-xs mt-2 opacity-70">{message.timestamp}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-card rounded-b-xl border-t border-border">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-full bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground"
            />
          </div>
          <button
            onClick={handleMicClick}
            className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Voice input"
          >
            <Mic className="w-5 h-5 text-accent-foreground" />
          </button>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="p-3 rounded-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Send message"
          >
            <Send className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;