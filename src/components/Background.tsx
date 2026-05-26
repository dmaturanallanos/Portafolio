export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(153,27,27,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#030303_0%,#0a0505_48%,#030303_100%)]" />
      <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-red-950/18 blur-3xl animate-aurora" />
      <div className="absolute bottom-[14%] right-[8%] h-64 w-64 rounded-full bg-red-700/12 blur-3xl animate-aurora [animation-delay:-4s]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(239,68,68,0.055),transparent)] animate-scan" />
    </div>
  );
}
