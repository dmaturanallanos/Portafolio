import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-4 rounded-full bg-cyan-300/20 blur-md" />
      </div>
    </motion.div>
  );
}
