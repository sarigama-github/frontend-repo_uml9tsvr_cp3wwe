import { useState } from 'react';
import { Home, Search, Settings, User, Star, ChevronRight } from 'lucide-react';

const conversationsSeed = [
  { id: 'c1', title: 'Find a 14" laptop under $1500', time: '2h ago' },
  { id: 'c2', title: 'Best noise-cancelling earbuds', time: 'Yesterday' },
  { id: 'c3', title: 'Minimalist desk setup', time: 'Mon' },
];

export default function LeftSidebar() {
  const [activeId, setActiveId] = useState('c1');

  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 border-r border-zinc-200/70 bg-white/70 backdrop-blur-xl">
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
      <div className="flex-1 overflow-y-auto px-2 pb-4">
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
              <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600" />
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">{c.time}</div>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-200/70">
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
