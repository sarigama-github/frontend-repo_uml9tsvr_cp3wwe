import { useState } from 'react';
import { Home, Search, Settings, User, Star } from 'lucide-react';

const conversationsSeed = [
  { id: 'c1', title: 'Find a 14" laptop under $1500', time: '2h ago' },
  { id: 'c2', title: 'Best noise-cancelling earbuds', time: 'Yesterday' },
  { id: 'c3', title: 'Minimalist desk setup', time: 'Mon' },
];

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

export default function LeftSidebar() {
  const [activeId, setActiveId] = useState('c1');

  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 border-r border-zinc-200/70 bg-white/70 backdrop-blur-xl overflow-y-auto scrollbar-thin-modern">
      <div className="px-4 py-4 border-b border-zinc-200/70">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
          <div className="font-semibold tracking-tight">ShopSense</div>
        </div>
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search conversations"
            className="w-full rounded-lg bg-zinc-50 pl-9 pr-3 py-2 text-sm outline-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      </div>

      <nav className="px-2 py-3 space-y-1">
        <SidebarItem icon={Home} label="Home" active />
        <SidebarItem icon={Star} label="Personal Picks" />
        <SidebarItem icon={Settings} label="Preferences" />
        <SidebarItem icon={User} label="Profile" />
      </nav>

      <div className="px-4 pt-3 pb-2 text-xs font-medium text-zinc-500">Recent</div>
      <div className="px-2 pb-2">
        {conversationsSeed.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`group w-full text-left rounded-lg px-3 py-2.5 mb-1 transition border ${
              activeId === c.id
                ? 'bg-zinc-50 border-zinc-200'
                : 'hover:bg-zinc-50/80 border-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="truncate text-sm font-medium text-zinc-800">{c.title}</div>
              <span className="text-xs text-zinc-500">{c.time}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Discovery moved below recents, stacked one by one */}
      <div className="px-2 pb-4 space-y-3">
        <DiscoveryCard title="Trending This Week" items={trendingItems} />
        <DiscoveryCard title="Daily Essentials" items={dailyItems} />
        <DiscoveryCard title="Personal Picks" items={personalItems} />
      </div>

      <div className="mt-auto p-4 border-t border-zinc-200/70">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center">
            <User className="h-4 w-4 text-zinc-600" />
          </div>
          <div className="text-sm">
            <div className="font-medium leading-tight">Alex Morgan</div>
            <div className="text-zinc-500">Premium</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 transition text-sm ${
        active
          ? 'bg-zinc-900 text-white'
          : 'hover:bg-zinc-100 text-zinc-700'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

function DiscoveryCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur p-3">
      <div className="text-xs font-semibold text-zinc-900 mb-2">{title}</div>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.id} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-100 overflow-hidden">
              <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] text-zinc-900 truncate">{it.name}</div>
              <div className="text-[11px] text-zinc-500">${it.price}</div>
            </div>
            <button className="text-[11px] px-2 py-1 rounded-lg bg-zinc-900 text-white">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
