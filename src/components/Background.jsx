import "./style/background.css";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* BASE GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, #0f1228, #131829, #0a0f1a)",
        }}
      />

      {/* GLOW BLOBS (STATIC) */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(45,24,74,.25) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(23,37,84,.2) 0%, transparent 100%)",
        }}
      />

      {/* ORBIT RINGS (OPTIONAL – STATIC) */}
      <div className="absolute top-1/4 left-1/3 w-[900px] h-[900px]">
        <div className="w-full h-full rounded-full border border-white/10" />
      </div>

      <div className="absolute bottom-[-200px] right-[-300px] w-[800px] h-[800px]">
        <div className="w-full h-full rounded-full border border-white/5" />
      </div>

      {/* Bubble 1 */}
      <div className="glowing-bubble w-[320px] h-[320px] -top-[150px] -left-[150px] sm:-top-[120px] sm:-left-[120px] absolute rounded-full" />

      {/* Bubble 2 */}
      <div className="glowing-bubble w-[240px] h-[240px] -bottom-[180px] right-[20%] absolute rounded-full" />

      {/* Bubble 3 */}
      {/* <div className="glowing-bubble w-[150px] h-[150px] top-[25%] -right-[150px] sm:-right-[100px] absolute rounded-full" /> */}

      {/* STATIC SPARKLES */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
        />
      ))}

      {/* NOISE */}
      <div className="noise-layer" />

      {/* VIGNETTE */}
      <div className="vignette" />
    </div>
  );
};

export default Background;