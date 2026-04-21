import React from "react";

const stats = [
  { value: "50+", label: "Projects Delivered", sub: "across 12 industries" },
  { value: "500K+", label: "Monthly Operations", sub: "automated pipelines" },
  { value: "99.9%", label: "Uptime SLA", sub: "production deployments" },
  { value: "<14d", label: "Avg. Delivery", sub: "from kickoff to launch" },
];

export default function Stats() {
  return (
    <section className="px-6 sm:px-8 py-16 sm:py-20 section-divider bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20 rounded-2xl overflow-hidden ghost-border">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="animate-fade-up bg-surface-container-low p-8 sm:p-10 flex flex-col gap-1.5 hover:bg-surface-container transition-colors duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="font-display font-bold text-[2.5rem] sm:text-[3.25rem] text-primary tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-white text-sm sm:text-base font-semibold mt-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
