export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(124,58,237,0.2),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.16),transparent_28%),linear-gradient(180deg,#05070f_0%,#090b16_48%,#05070f_100%)]" />
      <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-violet-700/18 blur-3xl animate-aurora" />
      <div className="absolute bottom-[14%] right-[8%] h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl animate-aurora [animation-delay:-4s]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(56,189,248,0.08),transparent)] animate-scan" />
    </div>
  );
}
