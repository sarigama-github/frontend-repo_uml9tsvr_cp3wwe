export default function HeaderBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 animate-pulse [animation-duration:3s] shadow-[0_0_30px_rgba(99,102,241,0.35)]" />
      <div className="text-lg font-semibold tracking-tight bg-gradient-to-r from-[#8b5cf6] via-[#22d3ee] to-[#60a5fa] bg-clip-text text-transparent">
        ShopSense
      </div>
    </div>
  );
}
