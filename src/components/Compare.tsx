import React from "react";

const beforeList = [
  "Unclear project direction",
  "Generic, forgettable content",
  "Weak first impressions",
  "Manual, error-prone workflows",
  "No scalable AI strategy",
];

const afterList = [
  "Clear roadmap & milestones",
  "State-of-the-art AI architecture",
  "Low-latency n8n automations",
  "Agent-first UX & design",
  "Scalable to 500K+ ops/month",
];

export default function Compare() {
  return (
    <section className="px-6 sm:px-8 py-20 sm:py-28 section-divider relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(193,205,131,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-up">
          <p className="label-md mb-3">Why choose Hermes?</p>
          <h2 className="font-display font-bold text-[2rem] sm:text-[2.5rem] text-white tracking-tight">
            The difference is measurable.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          {/* Before Card */}
          <div className="animate-fade-up delay-100 bg-surface-container rounded-2xl p-8 sm:p-10 ghost-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-surface-container-high ghost-border flex items-center justify-center">
                <span className="text-gray-500 text-xs font-bold">✕</span>
              </div>
              <h3 className="text-lg font-bold text-gray-400">Without Hermes</h3>
            </div>
            <ul className="space-y-4">
              {beforeList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500 text-sm sm:text-base">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2 2L10 10M10 2L2 10" stroke="#555" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="animate-fade-up delay-200 relative bg-[#131a07] rounded-2xl p-8 sm:p-10 border border-primary/20 shadow-[0_0_60px_rgba(193,205,131,0.07)]">
            {/* Glow top border line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center animate-pulse-ring">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold text-primary">With Hermes</h3>
            </div>
            <ul className="space-y-4">
              {afterList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 text-sm sm:text-base">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="#c1cd83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
