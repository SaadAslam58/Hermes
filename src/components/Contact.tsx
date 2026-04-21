"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// All project images for the sliding strip
const galleryImages = [
  { src: "/projects/robotech.png", alt: "Robotech Digital Book", tilt: "-3deg" },
  { src: "/projects/phase3.png",   alt: "Phase-3 Todo Agent",    tilt: "2deg"  },
  { src: "/projects/uiux.png",     alt: "UI/UX Design System",   tilt: "-2deg" },
  // Duplicated for seamless infinite scroll
  { src: "/projects/robotech.png", alt: "Robotech Digital Book", tilt: "3deg"  },
  { src: "/projects/phase3.png",   alt: "Phase-3 Todo Agent",    tilt: "-1deg" },
  { src: "/projects/uiux.png",     alt: "UI/UX Design System",   tilt: "2deg"  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const EMAIL_ADDRESS = "hellomedia555@gmail.com";
  const WHATSAPP_NUMBER = "+923272452671";
  const WHATSAPP_MESSAGE = "Hi Hermes! I found your portfolio and I'd love to discuss a project with you.";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden pt-24 pb-0 bg-surface section-divider">
      {/* ── Top CTA area ── */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <motion.p
          className="label-md mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Let's work together
        </motion.p>

        <motion.h2
          className="font-display font-bold text-[2.4rem] sm:text-[3.5rem] text-white tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a project in mind?<br />
          <span className="text-primary italic">Let's make it real.</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build AI agents, automation workflows, and full-stack applications.
          Reach out and I'll get back to you within 24 hours with a tailored proposal.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-primary hover:bg-[#aab768] text-on-primary px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-ambient"
          >
            {/* WhatsApp icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center gap-3 border ghost-border hover:border-primary/30 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            hello@hermes.dev
          </a>
        </motion.div>
      </div>

      {/* ── Sliding image gallery strip ── */}
      <motion.div
        className="relative w-full overflow-hidden pb-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />

        {/* The scrolling track */}
        <div className="flex gap-6 w-max animate-marquee">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[380px] sm:w-[480px] rounded-2xl overflow-hidden ghost-border shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.65)] transition-shadow duration-500 group cursor-default"
              style={{ transform: `rotate(${img.tilt})`, transformOrigin: "center bottom" }}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-surface-container-high border-b ghost-border">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <div className="flex-1 mx-2 bg-surface-container rounded-full h-4" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-container">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                  sizes="480px"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
