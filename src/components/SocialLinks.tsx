import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, Globe } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '../types/portfolio';

const LeetCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943L15.292 5.68A5.767 5.767 0 0 0 13.483 0zm-2.889 8.718a1.382 1.382 0 0 0-.974.406l-4.167 4.167a1.382 1.382 0 0 0 0 1.954 1.382 1.382 0 0 0 1.954 0l4.167-4.167a1.382 1.382 0 0 0-.98-2.36z" />
  </svg>
);

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
      name: 'LeetCode',
      url: social.leetcode,
      icon: LeetCodeIcon,
      color: 'hover:text-[#FFA116] hover:border-[#FFA116]/50',
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
