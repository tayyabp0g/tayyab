"use client";

import { useState, useRef, useEffect } from "react";
import { getChatResponse, getWelcomeMessage } from "@/lib/chatEngine";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcome = getWelcomeMessage();
      setMessages([{ role: "bot", text: welcome.message }]);
      setSuggestions(welcome.suggestions || []);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg = text.trim();
    setInput("");
    setSuggestions([]);
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);

    // Simulate typing delay
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 800));

    const response = getChatResponse(userMsg);
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "bot", text: response.message }]);
    setSuggestions(response.suggestions || []);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <img
              src="/images/logo.jpg"
              alt="AI Assistant"
              className="chat-header-avatar"
            />
            <div className="chat-header-info">
              <div className="chat-header-name">Tayyab&apos;s AI Assistant</div>
              <div className="chat-header-status">Online — Ask me anything!</div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.role}`}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-typing">
                <div className="chat-typing-dot" />
                <div className="chat-typing-dot" />
                <div className="chat-typing-dot" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && !isTyping && (
            <div className="chat-suggestions">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  className="chat-suggestion"
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form className="chat-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className="chat-send" aria-label="Send message">
              <FaPaperPlane size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
