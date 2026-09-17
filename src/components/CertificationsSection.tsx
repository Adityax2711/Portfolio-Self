import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { Certification } from '../types/portfolio';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
}) => {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-[#060a14]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // 03. CREDENTIALS & CERTIFICATIONS
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Verified Certifications & Honors
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Industry-recognized credentials spanning Cloud Engineering, Generative AI, and Advanced Technical Systems. Click any credential to verify badge authenticity.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 bg-cyan-950/30 border border-cyan-800/40 px-3 py-1.5 rounded-full self-start md:self-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
        </div>

        {/* Certifications Grid (2x2 on desktop for 4 verified credentials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            const hasUrl = Boolean(cert.url);

            return (
              <a
                key={cert.id}
                href={cert.url || '#'}
                target={hasUrl ? '_blank' : undefined}
                rel={hasUrl ? 'noopener noreferrer' : undefined}
                className={`group relative bg-[#141414] border border-[#242424] hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col justify-between hover:-translate-y-1 block ${
                  hasUrl ? 'cursor-pointer' : 'cursor-default pointer-events-none'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#282828] flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500 font-bold">
                        {indexFormatted}
                      </span>
                      {hasUrl && (
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-all">
                          <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mb-4">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#202020] flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1A1A1A] text-gray-300 border border-[#2A2A2A]">
                      {cert.year || '2026'}
                    </span>
                    {cert.badge && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-fuchsia-300/90">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>{cert.badge}</span>
                      </span>
                    )}
                  </div>

                  {hasUrl && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 group-hover:text-cyan-300 group-hover:underline transition-colors">
                      Verify Credential
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
