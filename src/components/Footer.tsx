import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Profile } from '../types/portfolio';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (profile.social.email) {
      navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About & Skills', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="pt-20 pb-12 px-6 border-t border-[#242424] bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto">
        {/* 3-Column Grid (stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="hero-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              {profile.name}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
              {profile.specialization}
            </p>
            <div className="text-xs font-mono text-gray-500 pt-2">
              Based in <span className="text-gray-300 font-medium">{profile.location}</span> • Available for high-impact software engineering roles & collaborative innovations.
            </div>
          </div>

          {/* Column 2: NAVIGATE Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-fuchsia-400">
              // NAVIGATE
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: REACH OUT Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">
              // REACH OUT
            </h4>

            {/* Email with Copy Button */}
            {profile.social.email && (
              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-500 block">Direct Email</span>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#141414] border border-[#242424]">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
                  <span className="text-xs sm:text-sm font-mono text-gray-200 truncate flex-1 select-all">
                    {profile.social.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2C2C2C] text-gray-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Phone */}
            {profile.social.phone && (
              <div className="pt-1">
                <span className="text-xs font-mono text-gray-500 block mb-1">Telephone</span>
                <a
                  href={`tel:${profile.social.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>{profile.social.phone}</span>
                </a>
              </div>
            )}

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-mono text-gray-500 block mb-2">Connect Across Networks</span>
              <SocialLinks social={profile.social} showLabels={false} />
            </div>
          </div>
        </div>

        {/* Bottom Strip with Divider */}
        <div className="pt-8 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="text-gray-400">
            Engineered with React 18, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
