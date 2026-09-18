import React from 'react';
import { MapPin, CheckCircle2, ExternalLink, Briefcase, ShieldCheck } from 'lucide-react';
import { Experience } from '../types/portfolio';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#060a14]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            // 02. EXPERIENCE
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Work Experience & Internships
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl">
              Hands-on engineering internships focused on AI hiring platforms, machine learning architectures, and defense-tech simulations.
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experience.map((exp, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="group relative bg-[#11141e]/90 border border-[#242436] hover:border-purple-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 backdrop-blur-sm"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/10 via-fuchsia-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />

                {/* Top Row: Index, Titles, Period & Verification Button */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 relative z-10">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-gray-600 group-hover:text-fuchsia-400 transition-colors">
                      {formattedIndex}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 mt-1.5 text-sm font-medium text-fuchsia-300">
                        <span className="text-gray-100 font-semibold">{exp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Period */}
                  <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white border border-purple-500/40 hover:border-purple-400 shadow-sm transition-all group/btn"
                        title="Open verified credential link in a new tab"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-400 group-hover/btn:text-purple-300" />
                        <span>{exp.linkText || 'Verify Credential'}</span>
                        <ExternalLink className="w-3 h-3 text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    <span className="inline-block text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#1C1C1C] text-amber-300/90 border border-[#2B2B2B]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 font-normal relative z-10">
                  {exp.summary}
                </p>

                {/* Tech stack tags */}
                {exp.tech && exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#181a26] text-gray-300 border border-[#2b2f42]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights as bullet items */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="pt-4 border-t border-[#222232] relative z-10">
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-fuchsia-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
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
