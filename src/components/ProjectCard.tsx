import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  indexNumber: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  indexNumber,
}) => {
  const [imageError, setImageError] = useState(false);
  const hasLiveLink = Boolean(project.link && project.link.trim() !== '' && project.link !== '#');
  const hasGithub = Boolean(project.github && project.github.trim() !== '' && project.github !== '#');
  const primaryUrl = hasLiveLink ? project.link : (hasGithub ? project.github : undefined);

  return (
    <div className="group relative bg-[#141414] border border-[#242424] hover:border-[#383838] rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-purple-950/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Left Column: Visual Image or Fallback */}
        <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-[#181818] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#242424]">
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full block group/img relative overflow-hidden focus:outline-none"
              title={hasLiveLink ? `Launch Live Project: ${project.title}` : `View GitHub Repository: ${project.title}`}
            >
              {project.image && !imageError ? (
                <img
                  src={project.image}
                  alt={project.title}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Image fallback with dark styled placeholder & title overlay */
                <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] relative overflow-hidden min-h-[240px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between z-10">
                    <span className="text-3xl font-mono font-bold text-[#2A2A2A]">
                      {indexNumber}
                    </span>
                    <Layers className="w-6 h-6 text-gray-600 group-hover:text-fuchsia-400 transition-colors" />
                  </div>

                  <div className="z-10 my-4">
                    <div className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider mb-1">
                      Architecture Overview
                    </div>
                    <h4 className="text-lg font-bold text-gray-200">
                      {project.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 z-10">
                    <span>{project.role}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px] z-10">
                <span className="text-xs font-mono text-white bg-black/80 px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-xl">
                  {hasLiveLink ? (
                    <>
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-fuchsia-400" />
                    </>
                  ) : (
                    <>
                      <span>Open GitHub Repo</span>
                      <Github className="w-3.5 h-3.5 text-fuchsia-400" />
                    </>
                  )}
                </span>
              </div>
            </a>
          ) : (
            project.image && !imageError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] relative overflow-hidden min-h-[240px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between z-10">
                  <span className="text-3xl font-mono font-bold text-[#2A2A2A]">
                    {indexNumber}
                  </span>
                  <Layers className="w-6 h-6 text-gray-600" />
                </div>
                <div className="z-10 my-4">
                  <h4 className="text-lg font-bold text-gray-200">
                    {project.title}
                  </h4>
                </div>
              </div>
            )
          )}

          {/* Highlight Badge */}
          {project.highlight && (
            <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/50 text-amber-300 text-xs font-mono shadow-lg">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>FEATURED</span>
            </div>
          )}
        </div>

        {/* Right Column: Project Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Top metadata line */}
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs font-mono text-fuchsia-400">
                {indexNumber} // {project.year}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1C1C1C] text-gray-400 border border-[#2B2B2B]">
                {project.role}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 transition-all">
              {primaryUrl ? (
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-flex items-center gap-2 text-white hover:text-fuchsia-300 transition-colors focus:outline-none"
                >
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover/title:text-fuchsia-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-sm font-medium text-fuchsia-300/80 mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#1C1C1C] text-gray-300 border border-[#282828]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#222222]">
            {/* LIVE PROJECT button */}
            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-white bg-accent-gradient hover:bg-accent-gradient-hover shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub Source Link */}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-gray-300 bg-[#1C1C1C] hover:text-white hover:bg-[#252525] border border-[#2B2B2B] hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SOURCE CODE</span>
              </a>
            )}

            {!hasLiveLink && hasGithub && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-gray-400 bg-[#171717] border border-[#262626]">
                <Terminal className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>ML Pipeline & CLI</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
