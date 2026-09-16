import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types/portfolio';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0C0C0C]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            // 02. EXPERIENCE
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
          Organizations & Leadership Roles
        </h2>

        {/* Experience List - Numbered 01, 02, 03... */}
        <div className="space-y-6">
          {experience.map((exp, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="group relative bg-[#141414] border border-[#242424] hover:border-[#383838] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/20"
              >
                {/* Top Row: Index, Titles, Period Monospace Pill */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-gray-600 group-hover:text-fuchsia-400 transition-colors">
                      {formattedIndex}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium text-fuchsia-300">
                        <span className="text-gray-200">{exp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period as Monospace Pill */}
                  <div className="self-start md:self-auto">
                    <span className="inline-block text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#1C1C1C] text-amber-300/90 border border-[#2B2B2B]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* First 3 Highlights as bullet items */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="pt-4 border-t border-[#222222]">
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                      Key Contributions
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.highlights.slice(0, 3).map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-fuchsia-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
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
