import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { Education } from '../types/portfolio';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#060a14]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial-at-c from-purple-950/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-fuchsia-400 uppercase tracking-widest">
            // ACADEMIC FOUNDATION
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Education & Academic Journey
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl">
              Building a rigorous engineering foundation in Computer Science, specialized in Blockchain Architecture, Distributed Systems, and Intelligent AI Security.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-fuchsia-400/90 bg-fuchsia-950/30 border border-fuchsia-800/40 px-3.5 py-1.5 rounded-full self-start md:self-auto">
            <GraduationCap className="w-4 h-4" />
            <span>UNDERGRADUATE DEGREE</span>
          </div>
        </div>

        {/* Education List */}
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-[#0d121f]/90 border border-[#1f293d] hover:border-fuchsia-500/40 rounded-2xl p-8 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-fuchsia-950/20 backdrop-blur-md"
            >
              {/* Header: School + Period */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#1b2336]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600/20 via-purple-600/10 to-transparent border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-fuchsia-600/10">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-fuchsia-200 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-fuchsia-400 mt-1">
                      {item.degree}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-fuchsia-300 bg-fuchsia-950/50 border border-fuchsia-800/40 px-3.5 py-1.5 rounded-full self-start">
                  <Calendar className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span className="font-semibold">{item.period}</span>
                </div>
              </div>

              {/* Specialization & Details */}
              <div className="py-6 space-y-4">
                {item.specialization && (
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 bg-[#161c2e] border border-purple-800/30 px-3 py-1 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span>Specialization: {item.specialization}</span>
                  </div>
                )}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Coursework & Competencies */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="pt-5 border-t border-[#1b2336]/80">
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-gray-400">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Coursework & Domains</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#141a29] text-gray-300 border border-[#243048] hover:border-fuchsia-500/40 hover:text-white transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Academic & Campus Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-6 pt-5 border-t border-[#1b2336]/80">
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-gray-400">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Leadership & Academic Highlights</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#121724]/70 border border-[#1b2336] text-xs text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
