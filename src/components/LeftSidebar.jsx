import { Home, Sparkles, Star, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
      active ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-100'
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

export default function LeftSidebar() {
  return (
    <aside className="hidden md:flex w-64 shrink-0 border-r border-neutral-200 bg-white/70 backdrop-blur-sm">
      <div className="p-4 w-full space-y-2">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={Sparkles} label="Discover" />
        <NavItem icon={Star} label="Saved" />
        <div className="pt-2">
          <div className="text-xs uppercase tracking-wide text-neutral-500 px-1 mb-2">Settings</div>
          <NavItem icon={Settings} label="Preferences" />
        </div>
      </div>
    </aside>
  );
}
