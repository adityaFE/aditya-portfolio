export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 -z-5 opacity-20 pointer-events-none">
      {/* Vertical lines */}
      <div className="absolute inset-0 grid grid-cols-12">
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="border-r border-primary/20 animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 grid grid-rows-12">
        {[...Array(12)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="border-b border-accent/20 animate-pulse"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Moving scanner line */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            animation: "scan 8s linear infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
