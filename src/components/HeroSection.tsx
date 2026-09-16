import React from 'react';
import { ArrowDown, Sparkles, FolderGit2, Send } from 'lucide-react';
import { Profile } from '../types/portfolio';
import { SocialLinks } from './SocialLinks';

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle ambient lighting glows behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-xs font-mono text-gray-300 mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-gray-400">{profile.role}</span>
          <span className="text-gray-600">•</span>
          <span className="text-amber-400/90 font-medium">{profile.location}</span>
        </div>

        {/* 3D Pixar Avatar Portrait */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-[#141414]">
            <img
              src={profile.avatarSvg || '/avatar.jpg'}
              alt={profile.name}
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition duration-500"
              onError={(e) => {
                // Fallback to stylized SVG avatar if image cannot be loaded
                e.currentTarget.src = '/avatar.jpg';
              }}
            />
          </div>
          <div className="absolute bottom-1 right-2 w-8 h-8 rounded-full bg-[#141414] border border-[#242424] flex items-center justify-center text-xs shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
        </div>

        {/* Chrome Display Headline: "Hi, I'm {shortName}" */}
        <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          Hi, I’m {profile.shortName}
        </h1>

        {/* Specialization Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-normal max-w-2xl mb-4 leading-relaxed">
          {profile.specialization}
        </p>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-mono tracking-widest text-fuchsia-400/90 uppercase mb-8">
          {profile.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-accent-gradient hover:bg-accent-gradient-hover shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>EXPLORE WORK</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-gray-200 bg-[#141414] border border-[#282828] hover:border-gray-500 hover:text-white hover:bg-[#1c1c1c] hover:-translate-y-0.5 transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="pt-2">
          <SocialLinks social={profile.social} showLabels={true} />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-1">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
