import React, { useState, useEffect } from 'react';
import { FolderGit2, Send } from 'lucide-react';
import { Profile } from '../types/portfolio';
import { SocialLinks } from './SocialLinks';
import { ParticleBackground } from './ParticleBackground';
import { Avatar3D } from './Avatar3D';

interface HeroSectionProps {
  profile: Profile;
}

/* ─── Typing Effect Hook ─── */
function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const typingTexts = [
    'Blockchain & Smart Contracts',
    'AI & Generative Systems',
    'Cloud Architecture',
    'Full Stack Development',
    'Decentralized Applications',
  ];

  const typedText = useTypingEffect(typingTexts, 70, 35, 1800);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Three.js Particle Background */}
      <ParticleBackground />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-purple-600/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[350px] bg-cyan-500/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-fuchsia-500/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Main Content: Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-24 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* LEFT: Text Content */}
          <div className="flex-1 max-w-xl text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-gray-400">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-sm sm:text-base font-mono tracking-widest text-cyan-400/80 uppercase mb-3">
              {profile.role}
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-[0.95]">
              <span className="hero-heading">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {profile.shortName}
              </span>
            </h1>

            {/* Typing Effect Tagline */}
            <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-base sm:text-lg md:text-xl text-gray-400 font-mono">
                {'> '}{typedText}
                <span className="typing-cursor">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base font-kanit tracking-wide text-gray-500 mb-8 max-w-md mx-auto lg:mx-0">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white
                  bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600
                  shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:shadow-xl
                  hover:-translate-y-0.5 transition-all duration-300
                  relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FolderGit2 className="w-4 h-4 relative z-10" />
                <span className="relative z-10">EXPLORE WORK</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-gray-200
                  bg-white/5 border border-white/10 backdrop-blur-sm
                  hover:border-white/25 hover:text-white hover:bg-white/10
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <SocialLinks social={profile.social} showLabels={false} />
            </div>
          </div>

          {/* RIGHT: 3D Avatar */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <Avatar3D
              imageSrc="/assets/avatar-3d.jpg"
              alt={`3D Avatar of ${profile.name}`}
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="scroll-indicator flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500 mb-2">
            SCROLL
          </span>
          <div className="scroll-mouse w-6 h-10 rounded-full border-2 border-gray-500/40 flex justify-center pt-2">
            <div className="scroll-wheel w-1 h-2 rounded-full bg-gray-400 animate-scroll-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
};
