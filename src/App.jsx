import { useState } from 'react';
import LeftSidebar from './components/LeftSidebar.jsx';
import ChatInterface from './components/ChatInterface.jsx';
import RightPanel from './components/RightPanel.jsx';
import TopBar from './components/TopBar.jsx';

function App() {
  const [recommended, setRecommended] = useState([]);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(99,102,241,0.08),transparent),radial-gradient(900px_500px_at_20%_10%,rgba(236,72,153,0.06),transparent)]">
      <TopBar />

      {/* 3-pane layout with independent scrolling for center and right */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex gap-4 h-[calc(100vh-64px)]">
        {/* Left navigation + history (already has its own internal scroll) */}
        <LeftSidebar />

        {/* Center column: chat + discovery with its own scroll */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          <ChatInterface onRecommend={setRecommended} />

          {/* Discovery sections */}
          <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
            <DiscoveryCard title="Trending This Week" items={trendingItems} />
            <DiscoveryCard title="Daily Essentials" items={dailyItems} />
            <DiscoveryCard title="Personal Picks" items={personalItems} />
          </section>
        </main>

        {/* Right panel: independent scroll */}
        <div className="hidden xl:flex w-96 shrink-0 overflow-y-auto">
          <div className="flex-1 flex flex-col gap-3">
            <RightPanel products={recommended} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoveryCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur p-4">
      <div className="text-sm font-semibold text-zinc-900 mb-2">{title}</div>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.id} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-zinc-100 overflow-hidden">
              <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-zinc-900 truncate">{it.name}</div>
              <div className="text-xs text-zinc-500">${it.price}</div>
            </div>
            <button className="text-xs px-2 py-1 rounded-lg bg-zinc-900 text-white">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const trendingItems = [
  { id: 't1', name: 'Airy Wireless Earbuds', price: 119, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop' },
  { id: 't2', name: 'Minimal Desk Lamp', price: 69, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop' },
  { id: 't3', name: 'Ceramic Dripper', price: 39, image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=600&auto=format&fit=crop' },
];

const dailyItems = [
  { id: 'd1', name: 'Eco Laundry Pods', price: 24, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop' },
  { id: 'd2', name: 'Reusable Water Bottle', price: 32, image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZXJraW0lMjBEcmlwcGVyfGVufDB8MHx8fDE3NjI3NjE1OTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'd3', name: 'USB-C Fast Cable', price: 12, image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=600&auto=format&fit=crop' },
];

const personalItems = [
  { id: 'p1', name: 'Compact 14" Laptop Stand', price: 45, image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=600&auto=format&fit=crop' },
  { id: 'p2', name: 'Silent Wireless Mouse', price: 29, image: 'https://images.unsplash.com/photo-1696150874769-ea4f30453c2c?q=80&w=1600&auto=format&fit=crop' },
  { id: 'p3', name: 'Desk Cable Organizer', price: 14, image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop' },
];

export default App;
