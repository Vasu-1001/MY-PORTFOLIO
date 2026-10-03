import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ProgrammerBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const { isDark } = useTheme();

  useEffect(() => {
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transition-colors duration-500"
      aria-hidden="true"
    >
      {/* Dynamic Background Canvas */}
      <div className="absolute inset-0 bg-[var(--bg-main)] transition-colors duration-500" />

      {/* Radiant Ambient Aurora Orbs */}
      <div
        className={`absolute -top-32 -left-20 w-[650px] h-[550px] rounded-full blur-[150px] animate-aurora-glow transition-all duration-700 ${
          isDark ? 'bg-violet-600/[0.12]' : 'bg-blue-400/[0.05]'
        }`}
      />
      <div
        className={`absolute top-1/4 -right-28 w-[600px] h-[600px] rounded-full blur-[160px] animate-aurora-glow transition-all duration-700 ${
          isDark ? 'bg-cyan-500/[0.10]' : 'bg-violet-400/[0.04]'
        }`}
        style={{ animationDelay: '2s' }}
      />
      <div
        className={`absolute bottom-1/3 left-10 w-[550px] h-[550px] rounded-full blur-[150px] animate-aurora-glow transition-all duration-700 ${
          isDark ? 'bg-indigo-600/[0.08]' : 'bg-sky-400/[0.035]'
        }`}
        style={{ animationDelay: '4s' }}
      />
      <div
        className={`absolute -bottom-36 right-1/4 w-[700px] h-[500px] rounded-full blur-[160px] transition-all duration-700 ${
          isDark ? 'bg-emerald-500/[0.07]' : 'bg-emerald-400/[0.03]'
        }`}
      />

      {/* Dynamic Cursor Light Spotlight */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full pointer-events-none transition-transform duration-100 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          background: isDark
            ? 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.05) 35%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(37, 99, 235, 0.05) 0%, rgba(124, 58, 237, 0.02) 40%, transparent 70%)',
        }}
      />

      {/* Precision Blueprint Grid with Micro Dot Matrix */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isDark ? 'opacity-35' : 'opacity-40'
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="executive-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid line paths */}
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke={isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.035)'}
              strokeWidth="1"
            />
            {/* Intersection Cross */}
            <path
              d="M 0 -2.5 L 0 2.5 M -2.5 0 L 2.5 0"
              fill="none"
              stroke={isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(37, 99, 235, 0.15)'}
              strokeWidth="1"
            />
            {/* Center Micro Dot */}
            <circle
              cx="28"
              cy="28"
              r="0.6"
              fill={isDark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(15, 23, 42, 0.06)'}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#executive-grid)" />
      </svg>

      {/* Subtle Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
            : 'linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)',
          backgroundSize: '112px 112px',
        }}
      />
    </div>
  );
};
