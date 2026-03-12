import React, { memo, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toio from "/toioAR.png";
import paper from "/mario.png";
import bs from "/bookshelf.png";
import memeMatcherPreview from "/meme-matcher.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import SectionHeader from "../SectionHeader";
import ComingSoon from "./ComingSoon";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2026",
    title: "Cat Meme Matcher",
    results: [
      { title: "Built a real-time facial expression classifier using MediaPipe 3D face landmarks." },
      { title: "Engineered pose-invariant geometric features to map facial metrics to meme categories." },
      { title: "Developed and deployed a full-stack React + FastAPI system with live webcam processing." },
    ],
    link: "https://cat-meme-matcher.vercel.app",
    image: memeMatcherPreview,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "The Reading Room",
    results: [
      { title: "Developed an interactive virtual reading room where users organize a personal bookshelf and manage their book collection." },
      { title: "Implemented draggable decor and persistent room layouts using React, Framer Motion, and Supabase." },
      { title: "Built and deployed a full-stack application with authentication, responsive UI, and cloud persistence on Vercel." },
    ],
    link: "https://the-reading-room-beta.vercel.app",
    image: bs
  },
  {
    company: "University of Calgary (Academic Project)",
    year: "2023",
    title: "CodeSwarm-AR",
    results: [
      { title: "Explored using robotics and augmented reality to make programming concepts more tangible for beginners." },
      { title: "Used toio robots to physically execute user-written code and visualize program behavior in real time." },
      { title: "Integrated a web interface, robot control, and AR overlays into a single interactive learning system." },
    ],
    link: "/papers/TPESR.pdf",
    image: toio,
  },
  {
    company: "University of Calgary (Academic Project)",
    year: "2023",
    title: "Embedded AR Games",
    results: [
      { title: "Built a 2D AR game with live, segmented body embedding." },
      { title: "Removed VR hardware using webcam-based segmentation and JavaScript." },
      { title: "Focused on accessible, fitness-oriented interactive experiences." },
    ],
    link: "/papers/EmbeddedGames.pdf",
    image: paper,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "Expense Tracker",
    results: [
      { title: "Full CRUD expense tracking with categories, notes, and date ranges + secure user authentication." },
      { title: "SQL analytics for monthly spend, category breakdowns, and trends with interactive charts." },
      { title: "Deployed as a production-style app with validation, error states, and polished UX." },
    ],
    link: null,
    image: null,
    comingSoon: true,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "Business Analytics Dashboard",
    results: [
      { title: "Built a KPI dashboard with charts, filters, and responsive layout using React + Tailwind." },
      { title: "Designed a SQL-backed data model and API endpoints for aggregations (revenue, churn, cohorts)." },
      { title: "Deployed a working demo on AWS (API + database) with environment-based config and basic monitoring." },
    ],
    link: null,
    image: null,
    comingSoon: true,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "Job Description Analyzer",
    results: [
      { title: "Analyzes a JD or resume to extract skills, summarize fit, and highlight gaps using an AI API." },
      { title: "Returns structured output (skills, keywords, match score, recommendations) and exports to JSON." },
      { title: "Includes guardrails + prompt design for consistent results and a clean, recruiter-friendly UI." },
    ],
    link: null,
    image: null,
    comingSoon: true,
  },
];

const ProjectCard = memo(function ProjectCard({
  project,
  index,
  hovered,
  setHovered,
  setActive,
  id,
}) {
  return (
    <motion.div
      layoutId={`card-${project.title}-${id}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => {
        setHovered(null);
        setActive(project);
      }}
      className={cn(
        "rounded-2xl relative overflow-hidden h-64 md:h-105 w-full cursor-pointer",
        "border border-white/10 bg-[#0f151f]/60",
        "transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.97] opacity-60"
      )}
    >
      {/* Background image or ComingSoon */}
      <motion.div layoutId={`image-${project.title}-${id}`} className="absolute inset-0">
        {project.comingSoon || !project.image ? (
          <ComingSoon className="h-full w-full rounded-none border-0" />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover object-top w-full h-full"
          />
        )}
      </motion.div>

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
          "flex flex-col justify-end p-5 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex gap-2 text-white/50 text-xs mb-1">
          <span>{project.company}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <motion.h3
          layoutId={`title-${project.title}-${id}`}
          className="font-semibold text-white text-lg leading-tight"
        >
          {project.title}
        </motion.h3>
        <p className="text-white/60 text-sm mt-1 line-clamp-2">
          {project.results[0].title}
        </p>
      </div>

      {/* Always-visible title when not hovered */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",
          "flex flex-col justify-end p-5 transition-opacity duration-300",
          hovered === index ? "opacity-0" : "opacity-100"
        )}
      >
        <motion.h3
          layoutId={`title-${project.title}-${id}`}
          className="font-semibold text-white text-lg leading-tight"
        >
          {project.title}
        </motion.h3>
        <motion.div
          layoutId={`button-${project.title}-${id}`}
          className="mt-1 text-xs text-white/40"
        >
          {project.link ? "Click to view" : "Coming soon"}
        </motion.div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="projects" className="w-full py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center min-h-screen">
        <SectionHeader
          title="My Projects"
          subtitle="Things I have been building lately"
        />

        {/* Backdrop */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-40 h-full w-full cursor-pointer bg-black/40 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        {/* Expanded modal */}
        <AnimatePresence>
          {active && (
            <div
              className="fixed inset-0 z-50 flex items-start justify-center px-4 pb-4 pt-20 pointer-events-none md:grid md:place-items-center md:p-4"
            >
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                onClick={() => setActive(null)}
                className="pointer-events-auto flex h-auto max-h-[calc(100dvh-7rem)] w-full max-w-[900px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0f151f] md:h-fit md:max-h-[90%]"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  {active.comingSoon || !active.image ? (
                    <div className="h-64 md:h-80">
                      <ComingSoon />
                    </div>
                  ) : (
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-64 md:h-80 object-cover object-top"
                    />
                  )}
                </motion.div>

                <div className="p-6 md:p-8 overflow-y-auto">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div>
                      <div className="flex gap-3 text-white/50 text-sm md:text-base">
                        <span>{active.company}</span>
                        <span>•</span>
                        <span>{active.year}</span>
                      </div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-2xl md:text-4xl mt-3"
                      >
                        {active.title}
                      </motion.h3>
                    </div>

                    {active.link ? (
                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 text-white/80 h-12 px-6 rounded-full inline-flex items-center justify-center gap-2 tracking-widest hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        View <LiaExternalLinkAltSolid />
                      </motion.a>
                    ) : (
                      <motion.div
                        layoutId={`button-${active.title}-${id}`}
                        className="bg-white/5 text-white/40 h-12 px-6 rounded-full inline-flex items-center justify-center tracking-widest"
                      >
                        Coming Soon
                      </motion.div>
                    )}
                  </div>

                  <div className="pt-6">
                    <motion.ul
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-4 text-white/60 text-sm md:text-base lg:text-lg"
                    >
                      {active.results.map((result) => (
                        <li key={result.title} className="flex items-start gap-2">
                          <GoDotFill className="size-4 md:size-5 mt-1 shrink-0 text-white/50" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Card grid */}
        <div className="mt-12 flex w-full flex-wrap justify-center gap-4">
          {portfolioProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.34rem)]"
            >
              <ProjectCard
                project={project}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
                setActive={setActive}
                id={id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
