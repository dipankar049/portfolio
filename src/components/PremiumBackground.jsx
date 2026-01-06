import { motion } from "framer-motion";

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float1 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(30px, -30px); }
            50% { transform: translate(0, -60px); }
            75% { transform: translate(-30px, -30px); }
        }
        // @keyframes float1 {
        //   0%, 100% { transform: translate(0px, -10px); }
        //   25% { transform: translate(20px, 20px); }
        //   50% { transform: translate(40px, 40px); }
        //   75% { transform: translate(20px, 20px); }
        // }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-50px, 60px) rotate(-90deg); }
          50% { transform: translate(0, 100px) rotate(-180deg); }
          75% { transform: translate(50px, 60px) rotate(-270deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -80px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; filter: blur(80px); }
          50% { opacity: 0.7; filter: blur(100px); }
        }
        
        @keyframes ring-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        .glow-blob {
          animation: pulse-glow 8s ease-in-out infinite;
        }
        
        .float-slow {
          animation: float1 20s ease-in-out infinite;
        }
        
        .float-medium {
          animation: float2 25s ease-in-out infinite;
        }
        
        .float-fast {
          animation: float3 15s ease-in-out infinite;
        }
        
        .orbit-ring {
          animation: ring-rotate 25s linear infinite;
        }

        /* Glowing Bubble Styles */
        .glowing-bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.2) 40%,
            rgba(255, 255, 255, 0.05) 60%,
            transparent 70%
          );
          box-shadow:
            inset 0 0 20px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(59, 130, 246, 0.5),
            0 0 80px rgba(59, 130, 246, 0.25);
          backdrop-filter: blur(8px);
        }

        .bubble-float-1 {
          animation: float1 22s ease-in-out infinite;
        }

        .bubble-float-2 {
          animation: float2 28s ease-in-out infinite;
        }

        .bubble-float-3 {
          animation: float3 18s ease-in-out infinite;
        }
      `}</style>

      {/* ===== DARK BASE GRADIENT ===== */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, #0f1228, #131829, #0a0f1a)" }} />

      {/* ===== DYNAMIC GLOW BLOBS ===== */}
      <div
        className="absolute -top-1/2 -left-1/3 w-[600px] h-[600px] rounded-full glow-blob float-slow"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, rgba(15, 23, 42, 0.1) 70%, transparent 100%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full glow-blob float-medium"
        style={{
          background: "radial-gradient(circle, rgba(45, 24, 74, 0.25) 0%, rgba(15, 23, 42, 0.05) 70%, transparent 100%)",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full glow-blob float-fast"
        style={{
          background: "radial-gradient(circle, rgba(23, 37, 84, 0.2) 0%, transparent 100%)",
          animationDelay: "7s",
        }}
      />

      {/* ===== ANIMATED RING SYSTEM ===== */}
      <div className="absolute top-1/4 left-1/3 w-[900px] h-[900px] orbit-ring">
        <div className="w-full h-full rounded-full border border-white/[0.08] shadow-xl" />
      </div>

      <div className="absolute bottom-[-200px] right-[-300px] w-[800px] h-[800px] orbit-ring" style={{ animationDelay: "-10s" }}>
        <div className="w-full h-full rounded-full border border-white/[0.05]" />
      </div>

      {/* ===== GLOWING ACCENT RINGS ===== */}
      {/* <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          border: "1px solid rgba(59, 130, 246, 0.15)",
          boxShadow: "0 0 40px rgba(59, 130, 246, 0.1), inset 0 0 40px rgba(59, 130, 246, 0.05)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* ===== FLOATING GLOWING BUBBLES ===== */}
      {/* Bubble 1 */}
      <motion.div
        className="glowing-bubble bubble-float-1"
        style={{
          width: "320px",
          height: "320px",
          top: "-120px",
          left: "-120px",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
      />

      {/* Bubble 2 */}
      <motion.div
        className="glowing-bubble bubble-float-2"
        style={{
          width: "240px",
          height: "240px",
          bottom: "-130px",
          right: "15%",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Bubble 3 */}
      <motion.div
        className="glowing-bubble bubble-float-3"
        style={{
          width: "150px",
          height: "150px",
          top: "25%",
          right: "-80px",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* ===== DYNAMIC PARTICLES ===== */}
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1;
        const duration = 3 + Math.random() * 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${size * 3}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.5, 1.5, 0.5],
              y: [0, -30, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}

      {/* ===== NOISE TEXTURE ===== */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0ibm9pc2UiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjgiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIC8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiIC8+PC9zdmc+')",
        }}
      />

      {/* ===== DARK VIGNETTE ===== */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.25) 100%)",
        }}
      />
    </div>
  );
};

export default PremiumBackground;