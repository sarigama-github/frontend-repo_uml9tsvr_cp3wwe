import { useState } from 'react';
import { Send } from 'lucide-react';

function Message({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
          isUser
            ? 'bg-black text-white rounded-br-sm'
            : 'bg-neutral-100 text-neutral-800 rounded-bl-sm'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I’m your shopping assistant. What are you looking for today?' },
  ]);
  const [input, setInput] = useState('');

  const onSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    // Simulated response
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "Got it. I’ll compare top options and highlight the best value picks. Want filters like price range or brand?",
        },
      ]);
    }, 400);
  };

  return (
    <section className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4 p-4 md:p-6">
        {messages.map((msg, i) => (
          <Message key={i} role={msg.role} content={msg.content} />
        ))}
      </div>
      <div className="border-t border-neutral-200 p-3 md:p-4 bg-white/70 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSend()}
            placeholder="Ask for comparisons, deals, reviews..."
            className="flex-1 border border-neutral-200 bg-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <button
            onClick={onSend}
            className="inline-flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md text-sm hover:bg-black/90"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
