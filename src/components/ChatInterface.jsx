import { useEffect, useRef, useState } from 'react';
import { Mic, Send, Sparkles, ThumbsUp, ThumbsDown, ChevronDown, Star } from 'lucide-react';

const demoMessages = [
  {
    id: 1,
    role: 'assistant',
    content:
      "Welcome back! Tell me what you need and I’ll curate the best options. Need a laptop for design, everyday earbuds, or a budget-friendly coffee grinder?",
  },
  {
    id: 2,
    role: 'user',
    content: 'I need a 14" laptop for photo editing under $1500',
  },
  {
    id: 3,
    role: 'assistant',
    content:
      'Here’s a quick summary: 14-inch, color-accurate display (100% sRGB+), 16GB RAM, fast SSD, and long battery. I’ll prioritize models with great thermals and quiet fans.'
  },
];

export default function ChatInterface({ onRecommend }) {
  const [messages, setMessages] = useState(demoMessages);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const next = [...messages, { id: Date.now(), role: 'user', content: input }];
    setMessages(next);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        role: 'assistant',
        content:
          'I compared display accuracy, weight, and battery life across retailers. Three options stand out. Tap Research Summary for the reasoning.',
        products: sampleProducts,
        summary: sampleSummary,
      };
      setMessages((m) => [...m, reply]);
      onRecommend?.(sampleProducts);
    }, 700);
  };

  return (
    <section className="relative flex-1 min-h-[60vh] flex flex-col">
      {/* Chat feed (internal scroll area with minimal scrollbar) */}
      <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin-modern">
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} content={m.content} products={m.products} summary={m.summary} />
        ))}
        <div ref={endRef} />
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-white to-white/70 pt-2">
        <div className="flex items-end gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 shadow-sm">
          <button className="h-9 w-9 rounded-lg bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center transition" aria-label="Voice input">
            <Mic className="h-4 w-4 text-zinc-700" />
          </button>
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for the best gear…"
            className="flex-1 resize-none bg-transparent outline-none py-2 text-[13.5px] leading-5 placeholder:text-zinc-400"
          />
          <button onClick={sendMessage} className="h-9 px-3 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition inline-flex items-center gap-2">
            <Send className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-sm">Send</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          {quickActions.map((q) => (
            <button key={q} onClick={() => setInput(q)} className="text-[11px] px-2 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition">
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function MessageBubble({ role, content, products, summary }) {
  const premium = role === 'assistant';
  return (
    <div className={`flex ${premium ? 'justify-start' : 'justify-end'} mb-2`}>
      <div
        className={`max-w-[70%] rounded-2xl px-3 py-2 shadow-sm border transition text-sm leading-5 ${
          premium
            ? 'bg-white/90 border-zinc-200'
            : 'bg-zinc-900 text-white border-zinc-800'
        }`}
      >
        <div className="prose prose-sm max-w-none prose-p:my-0 text-[13.5px] leading-5">
          <p>{content}</p>
        </div>
        {premium && summary && (
          <div className="mt-2 rounded-xl border border-zinc-200 bg-zinc-50">
            <button className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-zinc-700">
              <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-purple-500" />Research Summary</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="px-3 pb-2 text-[13px] text-zinc-700">
              {summary.points.map((p, i) => (
                <div key={i} className="flex items-start gap-2 py-0.5">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{p}</span>
                </div>
              ))}
              <div className="mt-1.5 text-[11px] text-zinc-500">Facts are verified across multiple retailers; opinions marked explicitly.</div>
            </div>
          </div>
        )}
        {premium && products && (
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
        <div className="mt-1.5 flex items-center gap-3 text-[11px] text-zinc-500">
          <button className="hover:text-zinc-700 inline-flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5" />Helpful</button>
          <button className="hover:text-zinc-700 inline-flex items-center gap-1"><ThumbsDown className="h-3.5 w-3.5" />Not quite</button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-2.5 hover:shadow-md transition">
      <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 mb-2 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-[13px] font-medium text-zinc-900 line-clamp-2">{product.name}</div>
          <div className="mt-0.5 flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? '' : 'text-zinc-300'}`} fill={i < Math.round(product.rating) ? 'currentColor' : 'none'} />
            ))}
            <span className="text-[11px] text-zinc-500 ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[13px] font-semibold">${product.price}</div>
          <div className="text-[10px] text-emerald-600">Best price</div>
        </div>
      </div>
      <div className="mt-1.5 text-[12px] text-zinc-600 line-clamp-2">{product.specs}</div>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-[11px] text-zinc-500">{product.retailers.length} retailers</div>
        <div className="opacity-0 group-hover:opacity-100 transition">
          <button className="text-[11px] px-2 py-1 rounded-lg bg-zinc-900 text-white">Compare</button>
        </div>
      </div>
      <div className="mt-2">
        <WhyBadge text={product.why} />
      </div>
    </div>
  );
}

function WhyBadge({ text }) {
  return (
    <div className="relative group inline-block">
      <span className="text-[11px] px-2 py-1 rounded-full bg-zinc-100 text-zinc-700">Why we recommend this</span>
      <div className="absolute left-0 mt-2 w-64 rounded-lg border border-zinc-200 bg-white p-2 text-xs text-zinc-700 shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none transition">
        {text}
      </div>
    </div>
  );
}

const quickActions = [
  'Find better alternatives',
  'Compare top 3 options',
  'Track price changes',
  'Suggest accessories',
];

const sampleProducts = [
  {
    id: 'p1',
    name: 'ZenBook Pro 14 OLED (2024)',
    price: 1399,
    rating: 4.7,
    specs: '14" OLED, i7-13700H, 16GB RAM, 1TB SSD, 1.4kg',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    retailers: ['Amazon', 'BestBuy', 'Direct'],
    why: 'Best display in class, great battery, silent under light workloads.'
  },
  {
    id: 'p2',
    name: 'ThinkPad X1 Carbon Gen 12',
    price: 1499,
    rating: 4.6,
    specs: '14" IPS, i7-1255U, 16GB RAM, 512GB SSD, 1.15kg',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    retailers: ['Lenovo', 'B&H'],
    why: 'Legendary keyboard, light, durable—great for travel.'
  },
];

const sampleSummary = {
  points: [
    'Prioritized accurate displays (OLED or 100% sRGB) for photo work.',
    'Balanced portability (<1.5kg) and battery life (>8h).',
    'Verified prices across 5 retailers; highlighted the lowest.',
  ],
};
