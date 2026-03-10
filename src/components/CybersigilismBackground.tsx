import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';

export const CybersigilismBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Structured star clusters for a true constellation look
  const stars = useMemo(() => {
    const constellationCount = 8;
    const result = [];
    for (let i = 0; i < constellationCount; i++) {
      const centerX = Math.random() * 100;
      const centerY = Math.random() * 100;
      const starCount = Math.floor(Math.random() * 4) + 3;
      
      for (let j = 0; j < starCount; j++) {
        result.push({
          id: `${i}-${j}`,
          constellationId: i,
          x: centerX + (Math.random() - 0.5) * 12,
          y: centerY + (Math.random() - 0.5) * 12,
          size: j === 0 ? 3 : Math.random() * 1.5 + 1, // First star in cluster is a "node"
          brightness: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
        });
      }
    }
    return result;
  }, []);

  // Connect stars within the same constellation
  const paths = useMemo(() => {
    const constellationPaths = [];
    const groups: { [key: number]: any[] } = {};
    stars.forEach(star => {
      if (!groups[star.constellationId]) groups[star.constellationId] = [];
      groups[star.constellationId].push(star);
    });

    Object.values(groups).forEach(group => {
      for (let i = 0; i < group.length - 1; i++) {
        constellationPaths.push({
          id: `path-${group[i].id}-${group[i+1].id}`,
          d: `M${group[i].x},${group[i].y} L${group[i+1].x},${group[i+1].y}`,
          brightness: Math.random() * 0.15 + 0.05,
        });
      }
      // Occasionally close the shape
      if (group.length > 2 && Math.random() > 0.5) {
        constellationPaths.push({
          id: `path-close-${group[0].id}`,
          d: `M${group[group.length-1].x},${group[group.length-1].y} L${group[0].x},${group[0].y}`,
          brightness: Math.random() * 0.1 + 0.05,
        });
      }
    });
    return constellationPaths;
  }, [stars]);

  // Ultra-detailed Cybersigilism Paths
  const sigils = [
    // Intricate center-piece sigil
    "M50,2 L52,20 L65,15 L58,25 L80,35 L55,32 L50,60 L45,32 L20,35 L42,25 L35,15 L48,20 Z M50,10 L51,22 L60,20 L55,26 L70,35 L53,32 L50,50 L47,32 L30,35 L45,26 L40,20 L49,22 Z",
    // Sharp flowing side sigil
    "M5,40 Q15,35 20,20 T40,5 Q45,25 60,30 T80,45 Q65,50 60,65 T40,85 Q35,65 20,60 T5,40 M15,40 Q25,37 30,25 T45,15 Q50,30 60,35 T75,45 Q60,48 55,60 T40,75 Q35,60 25,55 T15,40",
    // Geometric blade with inner detail
    "M20,10 L40,5 L60,10 L55,25 L80,30 L55,35 L60,55 L40,50 L20,55 L25,35 L0,30 L25,25 Z M30,18 L40,16 L50,18 L48,28 L65,30 L48,32 L50,45 L40,43 L30,45 L32,32 L15,30 L32,28 Z",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* Layered Nebula Glows for Depth */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]"
      />
      <div className="absolute inset-0 bg-radial-at-t from-brand-accent/5 via-transparent to-transparent opacity-60" />
      
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
          <filter id="star-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="sigil-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.05)" />
          </linearGradient>
        </defs>

        {/* Detailed Cybersigilism Elements */}
        {sigils.map((d, i) => (
          <motion.path
            key={`sigil-${i}`}
            d={d}
            fill="url(#sigil-grad)"
            stroke="white"
            strokeWidth="0.015"
            strokeOpacity="0.05"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 0.25, 
              scale: 1,
              x: mousePos.x * (0.003 * (i + 1)),
              y: mousePos.y * (0.003 * (i + 1)),
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              x: { type: "spring", damping: 70, stiffness: 15 },
              y: { type: "spring", damping: 70, stiffness: 15 }
            }}
            style={{ transformOrigin: 'center' }}
          />
        ))}

        {/* Constellation Lines */}
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="white"
            strokeWidth="0.02"
            strokeOpacity="0.3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: path.brightness,
              x: mousePos.x * 0.001,
              y: mousePos.y * 0.001
            }}
            transition={{ 
              pathLength: { duration: 6, ease: "easeInOut" },
              opacity: { duration: 4 },
              x: { type: "spring", damping: 50, stiffness: 30 },
              y: { type: "spring", damping: 50, stiffness: 30 }
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.size * 0.06}
            fill="white"
            filter="url(#star-glow)"
            animate={{
              opacity: [star.brightness, star.brightness * 0.2, star.brightness],
              scale: [1, 1.5, 1],
              x: mousePos.x * 0.002,
              y: mousePos.y * 0.002
            }}
            transition={{
              opacity: {
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              scale: {
                duration: star.duration * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              x: { type: "spring", damping: 60, stiffness: 20 },
              y: { type: "spring", damping: 60, stiffness: 20 }
            }}
          />
        ))}
      </svg>
    </div>
  );
};
