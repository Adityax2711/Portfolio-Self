import React from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Sort projects: highlight: true first, then remaining
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-fuchsia-500 uppercase tracking-widest">
            // 04. FEATURED WORK
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Selected Projects & Protocols
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Production-grade applications spanning AI prompt engineering, smart contract security audits, and decentralized infrastructure.
            </p>
          </div>
          <div className="text-xs font-mono text-gray-500">
            TOTAL: {projects.length} PROJECTS
          </div>
        </div>

        {/* Sticky Projects Stack */}
        <div className="space-y-8 relative">
          {sortedProjects.map((project, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                className="sticky transition-transform duration-200"
                style={{
                  top: `${80 + index * 12}px`,
                }}
              >
                <ProjectCard project={project} indexNumber={indexNumber} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
