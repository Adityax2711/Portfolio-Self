import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Layers,
  BarChart3,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
  GitBranch,
  Building2,
  Fingerprint,
  AlertTriangle
} from 'lucide-react';
import { ResearchItem } from '../types/portfolio';

interface ResearchSectionProps {
  research: ResearchItem[];
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ research }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'benchmarks' | 'literature'>('overview');
  const [selectedRiskTier, setSelectedRiskTier] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  if (!research || research.length === 0) return null;
  const paper = research[0]; // Primary ongoing research project

  return (
    <section id="research" className="py-24 px-6 relative bg-[#060a14] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            // RESEARCH & PUBLICATIONS
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Applied Security & AI Research
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl">
              Pioneering resilient, verifiable architectures uniting Machine Learning anomaly detection with permissioned blockchain auditability for digital banking security.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400/90 bg-purple-950/30 border border-purple-800/40 px-3.5 py-1.5 rounded-full self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>ACTIVE INVESTIGATION</span>
          </div>
        </div>

        {/* Paper Main Showcase Card */}
        <div className="bg-[#0b101d] border border-[#1d273d] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50 backdrop-blur-md">
          {/* Paper Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#1b253b]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {paper.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#141b2d] text-gray-300 border border-[#232f4c]">
                {paper.period}
              </span>
              {paper.regNo && (
                <span className="px-3 py-1 rounded-full text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-800/40">
                  Reg No: {paper.regNo}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              <span>{paper.affiliation}</span>
            </div>
          </div>

          {/* Paper Title & Domain Header */}
          <div className="py-6 border-b border-[#1b253b]">
            <span className="text-xs font-mono text-purple-400/90 uppercase tracking-wider block mb-2">
              TOPIC: {paper.topic}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight hover:text-purple-200 transition-colors">
              {paper.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400 font-mono">
              Lead Investigator: <span className="text-white font-medium">{paper.author}</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {paper.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111726] text-gray-400 border border-[#1f2b42]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 pt-6 pb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === 'overview'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#121929] text-gray-400 hover:text-white border border-[#1f2b42]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Overview & Abstract</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === 'architecture'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#121929] text-gray-400 hover:text-white border border-[#1f2b42]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>System Architecture & Triaging Flow</span>
            </button>

            <button
              onClick={() => setActiveTab('benchmarks')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === 'benchmarks'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#121929] text-gray-400 hover:text-white border border-[#1f2b42]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Comparative Benchmarks</span>
            </button>

            <button
              onClick={() => setActiveTab('literature')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === 'literature'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#121929] text-gray-400 hover:text-white border border-[#1f2b42]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Literature Review Synthesis</span>
            </button>
          </div>

          {/* TAB CONTENT: 1. OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Abstract Block */}
              <div className="bg-[#111726]/80 border border-[#1f2b42] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-purple-400 uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Research Abstract</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Problem Statement Block */}
              <div className="bg-[#18111e]/60 border border-rose-900/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-rose-400 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Problem Statement & Shortcomings in Current Banking</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paper.problemStatement}
                </p>
              </div>

              {/* Key Contributions Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Core Innovations & Architectural Advantages</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {paper.keyContributions.map((contrib, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-xl bg-[#121929]/70 border border-[#1f2b42] flex items-start gap-3 hover:border-purple-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {contrib}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: 2. ARCHITECTURE FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Architecture Intro */}
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    Dual-Layer Separation of Responsibilities
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    AI manages real-time intelligence & anomaly scoring; Permissioned Blockchain provides trust, auditability, and tamper-proof verification without storing sensitive customer PII.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-purple-900/50 text-purple-300 border border-purple-700/40">AI Layer</span>
                  <span>+</span>
                  <span className="px-2.5 py-1 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-700/40">Blockchain Audit</span>
                </div>
              </div>

              {/* Dynamic Risk Triaging Sandbox / Visualizer */}
              <div className="bg-[#101626] border border-[#1d273d] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                      Dynamic Risk-Based Triaging Engine
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400">
                    Filter Pathway:
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  <button
                    onClick={() => setSelectedRiskTier(selectedRiskTier === 'low' ? 'all' : 'low')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedRiskTier === 'low' || selectedRiskTier === 'all'
                        ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                        : 'bg-[#141b2d]/40 border-[#202b44] opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">LOW RISK (Score &lt; 30)</span>
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs font-semibold text-white">Frictionless Approval</p>
                    <p className="text-[11px] text-gray-400 mt-1">Instant processing for genuine baseline transactions with zero friction.</p>
                  </button>

                  <button
                    onClick={() => setSelectedRiskTier(selectedRiskTier === 'medium' ? 'all' : 'medium')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedRiskTier === 'medium' || selectedRiskTier === 'all'
                        ? 'bg-amber-950/30 border-amber-500/50 shadow-lg shadow-amber-950/20'
                        : 'bg-[#141b2d]/40 border-[#202b44] opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-amber-400">MEDIUM RISK (Score 30–75)</span>
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-xs font-semibold text-white">Adaptive Step-Up MFA</p>
                    <p className="text-[11px] text-gray-400 mt-1">Requires biometric validation or dynamic OTP challenge before approving.</p>
                  </button>

                  <button
                    onClick={() => setSelectedRiskTier(selectedRiskTier === 'high' ? 'all' : 'high')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedRiskTier === 'high' || selectedRiskTier === 'all'
                        ? 'bg-rose-950/30 border-rose-500/50 shadow-lg shadow-rose-950/20'
                        : 'bg-[#141b2d]/40 border-[#202b44] opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-rose-400">HIGH RISK (Score &gt; 75)</span>
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    </div>
                    <p className="text-xs font-semibold text-white">Immediate Block & Escalate</p>
                    <p className="text-[11px] text-gray-400 mt-1">Freezes execution, routes to fraud team, and logs audit hash to blockchain.</p>
                  </button>
                </div>
              </div>

              {/* 7-Step Pipeline Sequence */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-purple-400" />
                  <span>End-to-End Processing & Blockchain Audit Pipeline</span>
                </h4>

                <div className="space-y-3">
                  {paper.architectureSteps.map((step, sIdx) => {
                    const layerColor =
                      step.layer === 'input'
                        ? 'text-blue-400 border-blue-800/40 bg-blue-950/30'
                        : step.layer === 'ai'
                        ? 'text-purple-400 border-purple-800/40 bg-purple-950/30'
                        : step.layer === 'decision'
                        ? 'text-amber-400 border-amber-800/40 bg-amber-950/30'
                        : step.layer === 'blockchain'
                        ? 'text-cyan-400 border-cyan-800/40 bg-cyan-950/30'
                        : 'text-emerald-400 border-emerald-800/40 bg-emerald-950/30';

                    return (
                      <div
                        key={sIdx}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#111726]/60 border border-[#1f2b42] hover:border-purple-500/40 transition-all"
                      >
                        <div className="flex items-start sm:items-center gap-4">
                          <span className="w-8 h-8 rounded-lg bg-[#182136] border border-[#263554] flex items-center justify-center font-mono text-xs font-bold text-purple-300 flex-shrink-0">
                            {step.step}
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h5 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors">
                                {step.title}
                              </h5>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${layerColor}`}>
                                {step.badge}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {sIdx < paper.architectureSteps.length - 1 && (
                          <div className="hidden sm:block text-gray-600 flex-shrink-0">
                            <ArrowRight className="w-4 h-4 text-[#283756]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: 3. BENCHMARKS */}
          {activeTab === 'benchmarks' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {paper.comparativeMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-5 rounded-xl bg-[#101626] border border-[#1d273d] flex flex-col justify-between hover:border-purple-500/40 transition-all hover:-translate-y-1"
                  >
                    <div>
                      <span className="text-xs font-mono text-gray-400 block mb-3">
                        {metric.label}
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs font-mono text-gray-500">Traditional:</span>
                          <span className="text-sm font-mono text-rose-400 font-semibold">{metric.traditional}</span>
                        </div>
                        <div className="flex items-baseline justify-between pt-1 border-t border-[#1b253b]">
                          <span className="text-xs font-mono text-purple-300">Proposed AI:</span>
                          <span className="text-lg font-mono font-extrabold text-emerald-400">{metric.proposed}</span>
                        </div>
                      </div>
                    </div>
                    {metric.subtext && (
                      <p className="text-[11px] text-gray-400 mt-4 pt-3 border-t border-[#1b253b]/60 leading-snug">
                        {metric.subtext}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* In-depth Benchmarking Rationale */}
              <div className="p-6 rounded-xl bg-[#111726]/80 border border-[#1f2b42] space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Empirical Impact & Operational Gains</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
                  <div className="p-3.5 rounded-lg bg-[#141b2d] border border-[#232f4c]">
                    <span className="text-white font-bold block mb-1">Latency Reduction</span>
                    Eliminates the 24–48 hour manual verification queue bottleneck by handling 99%+ of transactions autonomously in under 500 milliseconds.
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#141b2d] border border-[#232f4c]">
                    <span className="text-white font-bold block mb-1">False-Positive Mitigation</span>
                    Adaptive continuous profiling slashes false alarms by up to 60%, preventing friction for legitimate high-volume banking customers.
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#141b2d] border border-[#232f4c]">
                    <span className="text-white font-bold block mb-1">Non-Repudiation Audit</span>
                    Cryptographic blockchain anchoring prevents bank admins or attackers from retrospectively manipulating risk records during forensic reviews.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: 4. LITERATURE REVIEW */}
          {activeTab === 'literature' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-[#111726] border border-[#1f2b42] text-xs text-gray-300">
                <span className="text-purple-400 font-mono font-semibold block mb-1">
                  Theoretical Foundations & Gap Analysis:
                </span>
                Comprehensive review of peer-reviewed literature informing our dual AI-Blockchain framework, addressing fundamental gaps in data privacy, verification delays, and decentralized audit trails.
              </div>

              <div className="space-y-3">
                {paper.literatureReferences.map((ref, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-5 rounded-xl bg-[#0f1523] border border-[#1d273d] hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#182136] border border-[#253452] flex items-center justify-center text-purple-400 text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                        {rIdx + 1}
                      </div>
                      <div className="space-y-2 flex-1">
                        <h5 className="text-sm font-bold text-white">
                          {ref.citation}
                        </h5>
                        <div className="text-xs text-gray-300 leading-relaxed">
                          <span className="text-purple-400/90 font-mono font-semibold">Key Finding: </span>
                          {ref.focus}
                        </div>
                        <div className="text-xs text-emerald-400/90 leading-relaxed bg-[#141b2d] p-2.5 rounded-lg border border-[#202c46]">
                          <span className="font-mono font-semibold">How This Research Solves It: </span>
                          {ref.limitationAddressed}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
