"use client";
import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Robotech Digital Book",
    subtitle: "Interactive Learning Platform",
    desc: "A fully interactive digital textbook on Physical AI & Humanoid Robotics — bridging the gap between LLMs/Agents and real-world robotics. Covers ROS 2, Gazebo, NVIDIA Isaac, and hands-on physical AI concepts for developers.",
    tags: ["Education", "Physical AI", "Robotics", "GitHub Pages"],
    accent: "#c1cd83",
    image: "/projects/robotech-mob.png",
    liveUrl: "https://saadaslam58.github.io/Robotech-Book/",
    codeUrl: "https://github.com/saadaslam58/Robotech-Book",
    imageLeft: true,
  },
  {
    id: "02",
    title: "Full-Stack Todo Agent",
    subtitle: "Full-Stack AI-Powered Task Manager",
    desc: "A full-stack todo application with an embedded OpenAI agent integration. Real-time task management, AI-assisted prioritisation, and a clean dashboard UI — demonstrating practical agent deployment in a production web context.",
    tags: ["OpenAI", "Full-Stack", "Next.js", "Agent Integration"],
    accent: "#83a4cd",
    image: "/projects/phase3.png",
    liveUrl: "https://saadaslam58.github.io/Phase-3/",
    codeUrl: "https://github.com/saadaslam58/Phase-3",
    imageLeft: false,
  },
  {
    id: "03",
    title: "UI/UX Design Systems",
    subtitle: "Premium Design & Component Libraries",
    desc: "Enterprise-grade design systems crafted in Figma — covering typography scales, colour tokens, component libraries, and motion guidelines. Delivered production-ready component suites that go from wireframe to pixel-perfect in weeks.",
    tags: ["Figma", "Design Systems", "UI/UX", "Component Library"],
    accent: "#cd9d83",
    image: "/projects/uiux.png",
    liveUrl: null,
    codeUrl: null,
    imageLeft: true,
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const imageVariant: Variants = {
    hidden: { opacity: 0, x: project.imageLeft ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } },
  };
  const textVariant: Variants = {
    hidden: { opacity: 0, x: project.imageLeft ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 } },
  };

  return (
    <div ref={ref} className="py-16 sm:py-24 section-divider">
      <div
        className={`flex flex-col ${
          project.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-12 lg:gap-20`}
      >
        {/* Image side */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full lg:w-1/2 relative group"
        >
          {/* Browser chrome mock */}
          <div className="rounded-2xl overflow-hidden ghost-border bg-surface-container shadow-[0_40px_80px_rgba(0,0,0,0.5)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.6)] transition-shadow duration-500">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-b ghost-border">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="flex-1 mx-3">
                <div className="bg-surface-container rounded-full h-5 w-full max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-gray-600 text-[10px] font-mono truncate px-3">
                    {project.liveUrl ?? "figma.com / design-system"}
                  </span>
                </div>
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Floating project number */}
          <div
            className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold shadow-lg"
            style={{ backgroundColor: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}30` }}
          >
            {project.id}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <div>
            <p className="label-md mb-3" style={{ color: project.accent }}>{project.subtitle}</p>
            <h3 className="font-display font-bold text-[1.8rem] sm:text-[2.2rem] text-white tracking-tight leading-tight mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">{project.desc}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                style={{ backgroundColor: `${project.accent}12`, color: project.accent, border: `1px solid ${project.accent}25` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 mt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: project.accent, color: "#1e2400" }}
              >
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm ghost-border hover:border-white/20 text-gray-300 hover:text-white transition-all duration-200"
              >
                View Code
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            {!project.liveUrl && !project.codeUrl && (
              <span className="text-gray-600 text-sm italic">Case study available on request</span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="work" className="px-6 sm:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pt-20 sm:pt-28 flex items-center gap-3"
        >
          <span className="label-md">Selected Work</span>
          <div className="flex-1 h-px bg-outline-variant opacity-30" />
          <span className="text-gray-600 text-xs font-mono">{String(projects.length).padStart(2, "0")} projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6"
        >
          <h2 className="font-display font-bold text-[2.2rem] sm:text-[3rem] text-white tracking-tight leading-tight">
            Things I've built &<br />
            <span className="text-primary italic">shipped to production.</span>
          </h2>
        </motion.div>

        {/* Project rows */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
