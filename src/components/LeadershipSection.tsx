import React from 'react';
import { Users, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { LeadershipRole } from '../types/portfolio';

interface LeadershipSectionProps {
  leadership: LeadershipRole[];
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ leadership }) => {
  return (
    <section id="leadership" className="py-24 px-6 relative bg-[#080c18]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-fuchsia-400 uppercase tracking-widest flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-fuchsia-400" />
            // 03. LEADERSHIP & COMMUNITY
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Organizations & Leadership
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl">
              Fostering developer communities, championing cloud technologies, and spearheading collaborative tech initiatives on campus and beyond.
            </p>
          </div>
        </div>

        {/* Leadership Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item, index) => {
            return (
              <div
                key={item.id || index}
                className="group relative bg-[#11141e]/85 border border-[#242436] hover:border-fuchsia-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-950/20 flex flex-col justify-between"
              >
                {/* Header: Organization & Badge */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-105 transition-transform">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-medium text-fuchsia-300">
                        {item.badge || 'Leadership'}
                      </span>
                    </div>

                    <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#181824] text-amber-300/90 border border-[#2b2b3b]">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-fuchsia-200 transition-colors mt-2">
                    {item.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400 mt-1 mb-4">
                    <span className="text-gray-200">{item.organization}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-4 border-t border-[#222232]">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2.5">
                      <Sparkles className="w-3 h-3 text-fuchsia-400" />
                      <span>Impact & Initiatives</span>
                    </div>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-400 font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
