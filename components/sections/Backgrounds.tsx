// components/Backgrounds.js
// Fondos decorativos estilo Dataiku

export const MeshGradient = ({ colors = ['#0F172A', '#1E3A8A', '#06B6D4'], className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-30"
      style={{
        background: `
          radial-gradient(at 20% 30%, ${colors[0]} 0px, transparent 50%),
          radial-gradient(at 80% 0%, ${colors[1]} 0px, transparent 50%),
          radial-gradient(at 80% 80%, ${colors[2]} 0px, transparent 50%),
          radial-gradient(at 0% 80%, ${colors[0]} 0px, transparent 50%)
        `
      }}
    />
  </div>
);

export const DotPattern = ({ color = 'rgba(6, 182, 212, 0.15)', className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}
    />
  </div>
);

export const GridPattern = ({ color = 'rgba(6, 182, 212, 0.08)', className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
  </div>
);

export const WaveBackground = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path 
        fill="url(#wave-gradient)" 
        fillOpacity="0.3" 
        d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,149.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const BlurredCircles = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    <div className="absolute top-10 left-10 w-96 h-96 bg-rivamez-cyan/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rivamez-navy/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rivamez-green/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
);

export const LinePattern = ({ className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(6, 182, 212, 0.3) 10px,
          rgba(6, 182, 212, 0.3) 11px
        )`
      }}
    />
  </div>
);

export const GradientBlob = ({ className = '', top = '10%', left = '10%', size = '400px', color = 'cyan' }) => {
  const colorMap = {
    cyan: 'bg-rivamez-cyan',
    navy: 'bg-rivamez-navy',
    green: 'bg-rivamez-green',
  };

  return (
    <div 
      className={`absolute ${colorMap[color]}/20 rounded-full blur-3xl ${className}`}
      style={{
        top,
        left,
        width: size,
        height: size,
        animation: 'blob 7s infinite'
      }}
    />
  );
};

export const CircuitPattern = ({ className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="2" fill="rgba(6, 182, 212, 0.2)" />
          <circle cx="75" cy="75" r="2" fill="rgba(6, 182, 212, 0.2)" />
          <line x1="25" y1="25" x2="75" y2="25" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" />
          <line x1="75" y1="25" x2="75" y2="75" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

export const GeometricPattern = ({ className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(30deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4),
          linear-gradient(150deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4),
          linear-gradient(30deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4),
          linear-gradient(150deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4)
        `,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
      }}
    />
  </div>
);

export const AnimatedGradient = ({ className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(45deg, #06B6D4, #0F172A, #1E3A8A, #06B6D4)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        opacity: 0.1
      }}
    />
  </div>
);

export const NoiseTexture = ({ className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="absolute inset-0 opacity-30 mix-blend-overlay"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}
    />
  </div>
);

// Add these to global CSS for animations
export const BackgroundAnimations = () => (
  <style jsx global>{`
    @keyframes blob {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}</style>
);
