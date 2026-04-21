"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Hermes transformed our entire onboarding workflow in under two weeks. The n8n automation he built reduced our manual work by 70% — we've never looked back.",
    author: "Karsten Ellenberger",
    role: "Head of Operations",
    company: "Scomirto Solutions",
    rating: 5,
    accent: "#c1cd83",
  },
  {
    quote: "The OpenAI agent integration was flawless. Our support team now handles 3x the volume with the same headcount. Exceptional turnaround and communication throughout.",
    author: "Kirsten Borton",
    role: "CTO",
    company: "Dual-Team Inc.",
    rating: 5,
    accent: "#83a4cd",
  },
  {
    quote: "We handed Hermes a vague idea and received a fully deployed, polished product. The agentic architecture outperformed every expectation we had.",
    author: "Steven Granderson",
    role: "Founder",
    company: "Openclaw Platform",
    rating: 5,
    accent: "#cd9d83",
  },
  {
    quote: "The UI design system Hermes delivered elevated our product from MVP to enterprise-grade in just two weeks. Clean, consistent, and beautiful.",
    author: "Layla Park",
    role: "Product Designer",
    company: "Agency Studio",
    rating: 5,
    accent: "#cd83c1",
  },
];

function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const SLIDE_INTERVAL = 4500;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goTo = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => {
    const idx = (active - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setActive(idx);
  };

  const next = () => {
    const idx = (active + 1) % testimonials.length;
    setDirection(1);
    setActive(idx);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((a) => (a + 1) % testimonials.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [active]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" className="px-6 sm:px-8 py-20 sm:py-28 section-divider bg-surface-container-low overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="label-md mb-3">Client Feedback</p>
          <h2 className="font-display font-bold text-[2rem] sm:text-[2.5rem] text-white tracking-tight">
            Trusted by builders & creators
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="bg-surface-container rounded-2xl p-8 sm:p-12 ghost-border flex flex-col gap-7"
              style={{ borderTopColor: `${t.accent}35` }}
            >
              {/* Top accent */}
              <div className="w-10 h-0.5 rounded-full" style={{ backgroundColor: t.accent }} />

              <Stars count={t.rating} color={t.accent} />

              <blockquote className="text-gray-200 text-lg sm:text-xl leading-relaxed font-light">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t ghost-border">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ backgroundColor: `${t.accent}20`, color: t.accent }}
                >
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.role} · {t.company}</p>
                </div>

                {/* Dots */}
                <div className="ml-auto flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === active ? "22px" : "6px",
                        height: "6px",
                        backgroundColor: i === active ? t.accent : "rgba(255,255,255,0.15)",
                      }}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <div className="flex items-center justify-end gap-3 mt-5">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-surface-container ghost-border flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-surface-container ghost-border flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
