import { useState } from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';

export default function TopBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-zinc-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2">
          <div className="text-sm sm:text-base font-medium text-zinc-800">Your personal shopping expert</div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input className="w-64 rounded-lg bg-zinc-50 pl-9 pr-3 py-2 text-sm outline-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-blue-400 transition" placeholder="Smarter Search" />
          </div>
          <button className="h-9 w-9 rounded-lg bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition" aria-label="Notifications">
            <Bell className="h-4 w-4 text-zinc-700" />
          </button>
          <button onClick={() => setOpen(!open)} className="h-9 px-2 rounded-lg bg-zinc-900 text-white text-sm inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span>Alex</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
