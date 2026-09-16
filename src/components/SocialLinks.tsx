import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, Globe } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '../types/portfolio';

interface SocialLinksProps {
  social: SocialLinksType;
  className?: string;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  social,
  className = '',
  showLabels = false,
}) => {
  const links = [
    {
      name: 'GitHub',
      url: social.github,
      icon: Github,
      color: 'hover:text-white hover:border-gray-400',
    },
    {
      name: 'LinkedIn',
      url: social.linkedin,
      icon: Linkedin,
      color: 'hover:text-sky-400 hover:border-sky-500/50',
    },
    {
      name: 'Instagram',
      url: social.instagram,
      icon: Instagram,
      color: 'hover:text-pink-400 hover:border-pink-500/50',
    },
    {
      name: 'Email',
      url: social.email ? `mailto:${social.email}` : undefined,
      icon: Mail,
      color: 'hover:text-amber-400 hover:border-amber-500/50',
    },
    {
      name: 'Phone',
      url: social.phone ? `tel:${social.phone.replace(/\s+/g, '')}` : undefined,
      icon: Phone,
      color: 'hover:text-emerald-400 hover:border-emerald-500/50',
    },
    {
      name: 'Website',
      url: social.website,
      icon: Globe,
      color: 'hover:text-purple-400 hover:border-purple-500/50',
    },
  ].filter((item) => item.url && item.url.trim() !== '');

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url?.startsWith('http') ? '_blank' : undefined}
            rel={link.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono tracking-wide
              bg-[#141414] text-[#A0A0A0] border border-[#242424]
              transition-all duration-200 hover:bg-[#1C1C1C] hover:-translate-y-0.5 ${link.color}`}
            aria-label={link.name}
          >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
            {showLabels && <span>{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
};
