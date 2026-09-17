import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Avatar3DProps {
  imageSrc: string;
  alt: string;
}

export const Avatar3D: React.FC<Avatar3DProps> = ({ imageSrc, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Normalize to -1 to 1, then scale to degrees
    const x = ((e.clientY - centerY) / (window.innerHeight / 2)) * -8;
    const y = ((e.clientX - centerX) / (window.innerWidth / 2)) * 12;
    targetRef.current = { x, y };
  }, []);

  // Smooth interpolation loop
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetRef.current.x, 0.06);
      currentY = lerp(currentY, targetRef.current.y, 0.06);
      setRotation({ x: currentX, y: currentY });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="avatar-3d-container relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1200px' }}
    >
      {/* Outer glow ring */}
      <div className={`avatar-glow-ring absolute inset-0 -m-6 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />

      {/* Secondary pulsing halo */}
      <div className="avatar-halo absolute inset-0 -m-12 rounded-full" />

      {/* Main avatar with parallax transform */}
      <div
        className="relative z-10 avatar-float"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(20px)`,
          transformStyle: 'preserve-3d',
          transition: 'none',
        }}
      >
        {/* Avatar image */}
        <div className="relative">
          <img
            src={imageSrc}
            alt={alt}
            className="w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] md:w-[420px] md:h-[560px] object-cover object-top rounded-2xl select-none pointer-events-none"
            style={{
              filter: `drop-shadow(0 0 40px rgba(168, 85, 247, 0.3)) drop-shadow(0 0 80px rgba(56, 189, 248, 0.15))`,
              transform: 'translateZ(30px)',
            }}
            draggable={false}
          />
          {/* Subtle bottom gradient fade into background */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none rounded-b-2xl"
            style={{
              background: 'linear-gradient(to top, #060a14 0%, transparent 100%)',
            }}
          />
        </div>
      </div>

      {/* Floating tech icons that orbit */}
      <div
        className="absolute z-20 avatar-orbit"
        style={{
          transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg)`,
        }}
      >
        <div className="orbit-icon orbit-icon-1">
          <span className="text-xl">⛓️</span>
        </div>
        <div className="orbit-icon orbit-icon-2">
          <span className="text-xl">🤖</span>
        </div>
        <div className="orbit-icon orbit-icon-3">
          <span className="text-xl">☁️</span>
        </div>
        <div className="orbit-icon orbit-icon-4">
          <span className="text-lg">{'</>'}</span>
        </div>
      </div>
    </div>
  );
};
