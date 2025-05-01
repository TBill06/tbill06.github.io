import { useState, useRef, useEffect } from 'react';
import { FiMaximize2, FiMinimize2, FiX } from 'react-icons/fi';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      content: "Hi there! I'm Tushar's AI assistant. Ask me anything about his skills, projects, or experience!" 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Predefined responses
  const responses = {
    skills: "Tushar's key skills include full-stack development with React, Node.js, and Python. He also has experience with VR/AR development, machine learning, and cloud services.",
    
    experience: "Tushar is studying Computer Science & Business at Memorial University. He's worked on projects involving web applications, VR interfaces, and machine learning models.",
    
    projects: "Some of Tushar's notable projects include a VR Chemistry Lab, a Kanban-style task management app, and a sentiment analysis system. Ask about any specific project for details!",
    
    education: "Tushar is pursuing a dual degree in Computer Science and Business at Memorial University, with a focus on software engineering and product development.",
    
    contact: "You can reach Tushar via email at bill.tushar21@gmail.com, or connect with him on LinkedIn or GitHub. Want me to provide those links?",
    
    default: "I don't have specific information about that yet. Why not ask about Tushar's skills, projects, experience, or how to contact him?"
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { type: 'user', content: inputValue };
    setMessages([...messages, userMessage]);
    
    // Process the query and generate response
    setTimeout(() => {
      const botMessage = { type: 'bot', content: generateResponse(inputValue) };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 600);
    
    setInputValue('');
  };

  const generateResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('skill') || q.includes('know') || q.includes('tech') || q.includes('stack')) {
      return responses.skills;
    } else if (q.includes('experience') || q.includes('work') || q.includes('job')) {
      return responses.experience;
    } else if (q.includes('project') || q.includes('portfolio') || q.includes('build')) {
      return responses.projects;
    } else if (q.includes('education') || q.includes('study') || q.includes('degree')) {
      return responses.education;
    } else if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return responses.contact;
    } else {
      return responses.default;
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#0A1221] p-4 rounded-full border border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300"
      >
        <div className="w-5 h-5 bg-[#00F0FF] rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 w-80 ${isMinimized ? 'h-12' : 'h-96'} 
                cyber-card overflow-hidden transition-all duration-300 flex flex-col`}
    >
      {/* Chat header */}
      <div className="bg-[#050A13] p-3 flex justify-between items-center border-b border-[#00F0FF]">
        <h3 className="text-[#00F0FF] font-mono text-sm">TUSHAR.AI v1.0</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-[#CCD6F6] hover:text-[#00F0FF]"
          >
            {isMinimized ? <FiMaximize2 size={14} /> : <FiMinimize2 size={14} />}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[#CCD6F6] hover:text-[#FF00C8]"
          >
            <FiX size={14} />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          {/* Messages container */}
          <div className="flex-grow p-3 overflow-y-auto bg-[#0A1221] space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`${msg.type === 'user' ? 'ml-auto' : 'mr-auto'} 
                          max-w-[80%] ${msg.type === 'user' ? 'bg-[#112240]' : 'bg-[#1D2D50]'} 
                          p-2 rounded-md`}
              >
                {msg.type === 'bot' && (
                  <span className="block text-[#00F0FF] text-xs mb-1 font-mono">&gt; AI:</span>
                )}
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-[#112240] bg-[#050A13]">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow bg-[#0A1221] border border-[#112240] text-white p-2 text-sm focus:outline-none focus:border-[#00F0FF]"
              />
              <button
                type="submit"
                className="bg-[#00F0FF] text-[#050A13] px-3 hover:bg-opacity-80 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AIChatAssistant;