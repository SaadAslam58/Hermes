import React from "react";

const footerLinks = {
  Services: ["n8n Automation", "AI Agents", "Web Development", "UI/UX Design"],
  Company: ["About", "Case Studies", "Testimonials", "Blog"],
  Contact: ["Book a Call", "hello@hermes.dev", "LinkedIn", "GitHub"],
};

const techBadges = ["OpenAI", "n8n", "Next.js", "Python", "FastAPI", "LangChain"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t ghost-border bg-surface-container-low">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Big background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden flex justify-center">
        <div className="font-display font-bold text-[8rem] sm:text-[14rem] text-white/[0.02] select-none pointer-events-none leading-none whitespace-nowrap">
          HERMES
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-10 relative">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="#1e2400" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white uppercase">Hermes</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              AI systems, automation workflows, and full-stack applications that drive measurable growth for modern businesses.
            </p>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container ghost-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-xs font-semibold">Available for new projects</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="label-md mb-5">{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-200 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badges row */}
        <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b ghost-border">
          {techBadges.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full bg-surface-container ghost-border text-gray-500 text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
          <p>© {year} Hermes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">Terms of Service</a>
            <a href="#contact" className="text-primary hover:text-[#aab768] font-semibold transition-colors duration-200">
              Book a Call ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
