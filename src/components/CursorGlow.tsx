import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 180, damping: 28 });
  const springY = useSpring(y, { stiffness: 180, damping: 28 });

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(supportsFinePointer);
    if (!supportsFinePointer) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] h-80 w-80 rounded-full bg-red-500/[0.055] blur-3xl"
      style={{ x: springX, y: springY }}
    />
  );
}
