"use client";

import { motion } from "framer-motion";

export default function Background3D() {
  // Minimal, light-mode background for clean modern design
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F1F1F1 100%)",
      }}
    >
      {/* Very subtle overlay accents to add depth without darkening */}
      <div className="absolute inset-0" style={{ opacity: 0.28 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
      </div>

      {/* Low-opacity soft orbs for subtle visual interest */}
      <motion.div
        className="absolute top-12 right-16 w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.06), transparent 60%)",
        }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 left-12 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(14,165,233,0.06), transparent 60%)",
        }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}