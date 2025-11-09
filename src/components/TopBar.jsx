import { Search, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black text-white flex items-center justify-center font-semibold">AI</div>
          <h1 className="text-lg font-semibold text-neutral-800">Shopping Assistant</h1>
        </div>

        <div className="hidden md:flex items-center gap-2 w-full max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products, brands, or questions..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-neutral-300 bg-white text-sm"
            />
          </div>
        </div>

        <button className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black transition-colors">
          <User className="h-5 w-5" />
          <span className="hidden sm:inline">Account</span>
        </button>
      </div>
    </header>
  );
}
