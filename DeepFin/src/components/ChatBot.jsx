import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import './ChatBot.css';

const KNOWLEDGE_BASE = {
  greetings: ['hi', 'hello', 'hey', 'start'],
  services: ['consulting', 'staffing', 'analytics', 'services', 'what do you do'],
  careers: ['job', 'career', 'hiring', 'work', 'apply'],
  contact: ['email', 'phone', 'contact', 'address', 'reach'],
  about: ['about', 'company', 'who are you', 'deepfin'],
};

const RESPONSES = {
  greetings: "Hello! I'm the DeepFin AI Assistant. How can I help you today? You can ask about our Services, Careers, or how to Contact us.",
  services: "We offer three core services: 1) IT Consulting (Cloud, AI, Cybersec), 2) Staffing Solutions (Top IT Talent), and 3) Financial Analytics (Data-driven insights).",
  careers: "We are currently hiring for Senior IT Consultants, DevOps Engineers, and Data Scientists. Check out our Careers page to apply!",
  contact: "You can reach us at info@deepfinai.net. For job applications, please email info@deepfinai.net.",
  about: "DeepFin AI is a leader in financial intelligence and IT solutions. We empower businesses with cutting-edge technology.",
  default: "I'm not sure about that. I can answer questions about our Services, Careers, or Contact info. Try asking 'What do you do?'",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I can answer questions about DeepFin. Ask me anything!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (text) => {
    const lowerText = text.toLowerCase();
    for (const [key, keywords] of Object.entries(KNOWLEDGE_BASE)) {
      if (keywords.some(k => lowerText.includes(k))) {
        return RESPONSES[key];
      }
    }
    return RESPONSES.default;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = findResponse(userMsg.text);
      const botMsg = { id: Date.now() + 1, text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chatbot-header">
              <div className="header-info">
                <span className="bot-avatar-header"><Bot size={18} /></span>
                <div>
                  <h3>DeepFin Assistant</h3>
                  <span className="status-dot">Online</span>
                </div>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  {msg.sender === 'bot' && <div className="message-avatar"><Bot size={14} /></div>}
                  <div className="message-content">{msg.text}</div>
                  {msg.sender === 'user' && <div className="message-avatar user"><User size={14} /></div>}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
