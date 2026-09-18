import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  shortName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ shortName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'RESEARCH', href: '#research' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'LEADERSHIP', href: '#leadership' },
    { name: 'CERTS', href: '#certifications' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060a14]/80 backdrop-blur-xl border-b border-white/5 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-white font-bold tracking-wider"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center text-white text-sm font-extrabold shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            {shortName.charAt(0)}
          </span>
          <span className="text-base font-semibold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
            {shortName}
            <span className="text-fuchsia-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141414]/70 border border-[#242424] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-wider text-[#A0A0A0] hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-[#202020]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-xs font-mono tracking-wider px-4 py-2 rounded-full font-medium text-white bg-accent-gradient hover:bg-accent-gradient-hover shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-[#141414] border border-[#242424] text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#060a14]/95 border-b border-white/5 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono tracking-wider text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-[#141414] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center text-xs font-mono tracking-wider px-4 py-2.5 rounded-lg font-medium text-white bg-accent-gradient"
            >
              LET'S TALK
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
