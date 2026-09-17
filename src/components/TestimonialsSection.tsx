import React from 'react';
import { Quote, MessageSquareQuote } from 'lucide-react';
import { Testimonial } from '../types/portfolio';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-0 relative bg-[#060a14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 mb-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            // 05. COLLABORATION & TESTIMONIALS
          </span>
          <div className="h-[1px] flex-1 bg-[#242424]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="chrome-text text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Peer & Mentor Endorsements
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Feedback from colleagues, community leads, and hackathon teammates.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <MessageSquareQuote className="w-4 h-4 text-fuchsia-400" />
            <span>HOVER TO PAUSE</span>
          </div>
        </div>
      </div>

      {/* Marquee Container with edge fading gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#060a14] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#060a14] to-transparent z-10" />

        {/* CSS-only infinite horizontal marquee right-to-left */}
        <div className="animate-marquee py-4">
          {marqueeItems.map((item, index) => {
            const initial = item.name.charAt(0);
            return (
              <div
                key={`${item.id}-${index}`}
                className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 mx-3.5 bg-[#141414] border border-[#242424] hover:border-[#383838] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-7 h-7 text-fuchsia-400/50" />
                    <span className="text-xs font-mono text-gray-600">
                      0{ (index % testimonials.length) + 1 }
                    </span>
                  </div>

                  {/* Italic Quote */}
                  <p className="text-sm sm:text-base italic text-gray-300 leading-relaxed mb-6 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-[#222222]">
                  {/* Avatar circle with initial */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md shrink-0"
                    style={{
                      backgroundColor: item.avatarColor || '#a855f7',
                    }}
                  >
                    {initial}
                  </div>

                  <div>
                    {/* Uppercase name */}
                    <div className="text-sm font-bold text-white tracking-wide uppercase">
                      {item.name}
                    </div>
                    {/* Muted role */}
                    <div className="text-xs text-gray-400 font-mono">
                      {item.role}
                    </div>
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
