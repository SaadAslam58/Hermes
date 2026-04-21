import React from "react";

const tech = ["OpenAI", "n8n", "LangChain", "Next.js", "Python", "FastAPI", "OpenClaw", "Vercel"];

const clients = [
  { initials: "SK", color: "#c1cd83" },
  { initials: "MR", color: "#83a4cd" },
  { initials: "AJ", color: "#cd9d83" },
  { initials: "LP", color: "#cd83c1" },
];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-8 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Glow background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      {/* Subtle radial grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(193,205,131,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(193,205,131,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Social proof row */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex -space-x-2.5">
            {clients.map((c, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-surface flex items-center justify-center text-[10px] font-bold"
                style={{ backgroundColor: `${c.color}22`, color: c.color, borderColor: "#0e0e0e" }}
              >
                {c.initials}
              </div>
            ))}
          </div>
          <div className="h-px w-6 bg-outline-variant" />
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c1cd83">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm">Trusted by 50+ clients worldwide</span>
        </div>

        {/* Headline */}
        <div className="mb-6">
          <p className="label-md mb-4">AI-Powered Agency · Available for Projects</p>
          <h1 className="display-lg text-[3.5rem] md:text-[5rem] max-w-4xl">
            Building Intelligent
            <br />
            <span className="text-primary italic">Systems That Scale.</span>
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="body-lg text-gray-400 max-w-xl mb-10 text-lg leading-relaxed">
          I design and deploy AI agents, automation workflows, and full-stack applications
          that replace manual processes and drive measurable growth.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <a
            href="#contact"
            className="flex items-center gap-3 bg-primary hover:bg-[#aab768] text-on-primary px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-ambient"
          >
            Book a Discovery Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#work"
            className="flex items-center gap-3 border ghost-border hover:border-primary/30 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
          >
            View My Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Tech strip */}
        <div className="section-divider pt-8">
          <p className="label-md mb-5">Built with</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {tech.map((t) => (
              <span key={t} className="text-gray-500 hover:text-gray-300 text-sm font-medium transition-colors duration-200 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
