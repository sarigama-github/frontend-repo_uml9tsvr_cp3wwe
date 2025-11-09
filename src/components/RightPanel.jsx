export default function RightPanel() {
  return (
    <aside className="hidden lg:flex w-80 shrink-0 border-l border-neutral-200 bg-white/70 backdrop-blur-sm">
      <div className="p-4 w-full space-y-4">
        <section>
          <h3 className="text-sm font-semibold text-neutral-800 mb-2">Trending</h3>
          <ul className="space-y-2">
            {["Noise-cancelling headphones", "Ergonomic chair", "4K OLED TV"].map((item) => (
              <li key={item} className="text-sm text-neutral-700 hover:text-black cursor-pointer">{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-neutral-800 mb-2">Tips</h3>
          <div className="text-sm text-neutral-600">
            Ask things like “Compare the latest noise-cancelling headphones under $300.”
          </div>
        </section>
      </div>
    </aside>
  );
}
