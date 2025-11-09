import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(900px_500px_at_20%_10%,rgba(79,70,229,0.35),transparent)]">
      <Spline
        scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradient tint & grain overlay that does NOT block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
    </div>
  );
}
