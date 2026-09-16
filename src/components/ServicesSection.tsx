import React from 'react';
import { Server, BrainCircuit, Layout, Cloud } from 'lucide-react';

/* TODO: Move services definition to portfolio.json in future iteration */
interface ServiceItem {
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const hardcodedServices: ServiceItem[] = [
  {
    number: '01',
    title: 'Backend & Distributed Architecture',
    category: 'Backend',
    description:
      'Designing robust, highly-concurrent backend architectures, microservices, and high-performance APIs with Python, Java, and SQL databases. Built for fault tolerance and sub-second latencies.',
    deliverables: [
      'REST & GraphQL API Engineering',
      'Database Schema Design & Query Optimization',
      'Asynchronous Event Streams & Background Processing',
      'Authentication, Authorization & Role Security',
    ],
    icon: Server,
  },
  {
    number: '02',
    title: 'AI, LLM & Prompt Engineering Systems',
    category: 'AI/LLM',
    description:
      'Developing autonomous reasoning pipelines, RAG implementations, multi-agent frameworks, and structured prompt engineering systems that transform unstructured data into deterministic business logic.',
    deliverables: [
      'LLM Tool Calling & Structured Output Parsers',
      'Vector Search & Knowledge Retrieval (RAG)',
      'Prompt Template Benchmarking & Evaluation',
      'Autonomous Agent Collaboration Workflows',
    ],
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: 'Modern Frontend & Interactive Interfaces',
    category: 'Frontend',
    description:
      'Crafting lightning-fast, visually captivating user interfaces using React, TypeScript, and Tailwind CSS. Obsessed with micro-interactions, responsive ergonomics, and sleek dark aesthetics.',
    deliverables: [
      'Component-Driven Design Systems',
      'Framer Motion & Interactive Animations',
      'Web3 dApp Interface & Wallet Integration',
      'State Management & Performance Profiling',
    ],
    icon: Layout,
  },
  {
    number: '04',
    title: 'Cloud Infrastructure & Blockchain Systems',
    category: 'Cloud',
    description:
      'Deploying scalable cloud services on Google Cloud and AWS paired with tamper-proof smart contract protocols on EVM chains. Bridging centralized cloud speed with decentralized cryptographic verifiability.',
    deliverables: [
      'Containerization & Docker Orchestration',
      'Serverless Architectures (AWS Lambda, Cloud Run)',
      'Solidity Smart Contract Development & Auditing',
      'CI/CD Pipelines & Infrastructure as Code',
    ],
    icon: Cloud,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
            // 03. SERVICES & SPECIALIZATION
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
          Engineering Solutions & Capabilities
        </h2>

        {/* Services List in same numbered design */}
        <div className="space-y-6">
          {hardcodedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative bg-[#141414] border border-[#242424] hover:border-[#383838] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-950/20"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-gray-600 group-hover:text-amber-400 transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-xs font-mono uppercase tracking-wider text-fuchsia-400">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[#222222]">
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                    Deliverables & Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
