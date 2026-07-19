import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, X, MessageCircle } from 'lucide-react';
import { useChat } from '../context/ChatContext';

export const QuestChat = () => {
  const { isChatOpen, openChat, closeChat } = useChat();
  const [messages, setMessages] = useState([{ id: 1, text: "Hello! Ready to start your quest?", sender: 'ai' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, isTyping]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Interesting quest! Let me help.", sender: 'ai' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button - Always visible */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isChatOpen ? closeChat : openChat}
        className="w-14 h-14 bg-[#064E3B] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#065F46] transition-colors"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window - Only visible when isChatOpen is true */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-[#0F172A]/10 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-[#0F172A] text-white flex items-center gap-2">
              <Sparkles className="text-yellow-400" />
              <span className="font-bold">Quest AI</span>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${m.sender === 'user' ? 'bg-[#064E3B] text-white' : 'bg-[#0F172A]/5 text-[#0F172A]'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-[#0F172A]/40 text-sm italic">Quest AI is typing...</div>}
            </div>

            <div className="border-t border-[#0F172A]/10 p-4 bg-white">
              <div className="flex gap-2">
                <input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-gray-100 px-4 py-2 rounded-full outline-none text-sm"
                />
                <button onClick={() => handleSend()} className="text-[#064E3B]"><Send size={20} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};