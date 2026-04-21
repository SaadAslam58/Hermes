import React from "react";

const services = [
  {
    num: "01",
    title: "Full-Stack Agentic Development",
    desc: "End-to-end web applications built with agentic architectures — from AI-powered backends to responsive frontends that adapt intelligently to user behavior.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "n8n Workflow Automation",
    desc: "Design and deploy production-grade n8n pipelines that automate complex business processes, integrate 3rd-party APIs, and eliminate manual bottlenecks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "OpenAI Agent Integration",
    desc: "Custom AI agents powered by the OpenAI SDK — from simple assistants to multi-step reasoning systems that take real-world actions on your behalf.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Agentic UI/UX Design",
    desc: "Premium interface design that communicates trust and intelligence. Figma-to-code delivery with micro-animations, design systems, and responsive layouts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="services" className="px-8 py-24 section-divider">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="label-md mb-3">What I offer</p>
            <h2 className="font-display font-bold text-[2.5rem] text-white tracking-tight leading-tight">
              Services Built for<br />
              <span className="text-primary italic">Modern Businesses</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 font-medium"
          >
            Start a project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-surface-container rounded-2xl p-8 ghost-border hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-7 font-mono text-[0.65rem] text-gray-700 tracking-widest">
                {s.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-surface-container-high ghost-border flex items-center justify-center text-primary mb-7 group-hover:bg-surface-container-highest transition-colors duration-200">
                {s.icon}
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>

              {/* Arrow on hover */}
              <div className="mt-6 flex items-center gap-2 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
                Learn more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
