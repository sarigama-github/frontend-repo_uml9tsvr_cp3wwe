import { useMemo } from 'react';
import { BarChart2, Heart, Share2, ListChecks, TrendingUp } from 'lucide-react';

export default function RightPanel({ products = [] }) {
  const top = useMemo(() => products[0], [products]);
  return (
    // Single modern scroll area on the right
    <aside className="hidden xl:flex w-96 shrink-0 h-full overflow-y-auto flex-col gap-3">
      <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur p-4">
        <div className="text-sm font-semibold text-zinc-900">Product Details</div>
        {top ? (
          <div className="mt-3">
            <div className="aspect-video rounded-lg bg-zinc-100 overflow-hidden">
              <img src={top.image} alt={top.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 font-medium text-zinc-900 leading-snug">{top.name}</div>
            <div className="text-sm text-zinc-600">${top.price} • {top.retailers?.length || 0} retailers</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <MiniStat icon={TrendingUp} label="Trend" value="Rising" />
              <MiniStat icon={BarChart2} label="Price" value="Stable" />
              <MiniStat icon={ListChecks} label="Score" value="9.1/10" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-sm">Quick Compare</button>
              <button className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 text-sm inline-flex items-center gap-2"><Heart className="h-4 w-4" />Save</button>
              <button className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 text-sm inline-flex items-center gap-2"><Share2 className="h-4 w-4" />Share</button>
            </div>
          </div>
        ) : (
          <div className="mt-3 text-sm text-zinc-600">Recommendations will appear here when the assistant suggests products.</div>
        )}
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur p-4">
        <div className="text-sm font-semibold text-zinc-900 mb-2">Price Tracker</div>
        <PriceSparkline />
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur p-4 mb-3">
        <div className="text-sm font-semibold text-zinc-900 mb-2">Community Pulse</div>
        <div className="text-sm text-zinc-600">Shoppers similar to you are buying lightweight 14" laptops with OLED displays this week.</div>
      </div>
    </aside>
  );
}

function MiniStat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
      <div className="text-[11px] text-zinc-500">{label}</div>
      <div className="flex items-center gap-1 text-sm font-medium text-zinc-900">
        <Icon className="h-3.5 w-3.5 text-zinc-400" /> {value}
      </div>
    </div>
  );
}

function PriceSparkline() {
  const points = [10,12,11,13,12,12.5,12.2,12.8,12.6,12.4,12.7,12.9,13.1];
  const width = 280;
  const height = 80;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((p - min) / (max - min)) * height;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');
  return (
    <svg width={width} height={height} className="w-full h-20">
      <path d={d} fill="none" stroke="url(#g)" strokeWidth="2" />
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}
