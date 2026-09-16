import React from 'react';
import { Terminal, GraduationCap, Cpu } from 'lucide-react';
import { Profile, SkillsData, Education } from '../types/portfolio';

interface AboutSectionProps {
  profile: Profile;
  skills: SkillsData;
  education: Education[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  skills,
  education,
}) => {
  // Format bio paragraphs from string
  const bioParagraphs = profile.bio
    .split('\n\n')
    .filter((p) => p.trim() !== '');

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-fuchsia-500 uppercase tracking-widest">
            // 01. ABOUT ME
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12">
          Building Systems at the Intersection of AI & Web3
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio column */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="bg-[#141414] border border-[#242424] rounded-2xl p-8 shadow-xl"
              style={{ overflowWrap: 'normal', wordBreak: 'normal' }}
            >
              <div className="flex items-center gap-2 mb-6 text-xs font-mono text-gray-400">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>whoami.md</span>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                {bioParagraphs.map((para, idx) => (
                  <p key={idx} className="break-words">
                    {para}
                  </p>
                ))}
              </div>

              {/* Quick stats / metrics strip */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#242424]">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    {profile.yearsOfExperience}
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-1">Years Coding</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-fuchsia-400 font-mono">
                    9+
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-1">Core Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
                    4
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-1">Tech Roles</div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            {education && education.length > 0 && (
              <div className="bg-[#141414] border border-[#242424] rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-4 text-sm font-semibold text-white">
                  <GraduationCap className="w-5 h-5 text-fuchsia-400" />
                  <span>Academic Foundation</span>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold text-white">
                        {edu.institution}
                      </h4>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1F1F1F] text-gray-400 border border-[#2B2B2B]">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-fuchsia-300/90 font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-gray-400">
                      {edu.location}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-gray-400 pt-2 border-t border-[#222222]">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Skills column */}
          <div id="skills" className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-orange-400" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-gray-300">
                Technical Capabilities
              </h3>
            </div>

            <div className="space-y-4">
              {skills.categories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-[#141414] border border-[#242424] rounded-xl p-5 hover:border-[#383838] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      {category.name}
                    </span>
                    <span className="text-[10px] font-mono text-fuchsia-400/80 bg-fuchsia-950/40 border border-fuchsia-800/30 px-2 py-0.5 rounded-full">
                      {category.items.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#1C1C1C] text-gray-300 border border-[#282828] hover:border-gray-500 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
