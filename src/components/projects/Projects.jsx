import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import among from "/among.png";
import toio from "/toioAR.png";
import paper from "/mario.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import SectionHeader from "../SectionHeader";
import Card from "../aboutme/Card";
import ComingSoon from "./ComingSoon";


const portfolioProjects = [

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
  year: "2022",
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

const ProjectImageZoom = ({ src, alt }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"], // ✅ finishes at middle
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);


  return (
    <div ref={containerRef} className="relative w-full h-full">
      <motion.img
        src={src}
        alt={alt}
        style={{ scale }}
        className="w-full h-full object-cover block will-change-transform"
      />
    </div>
  );
};

const ProjectStackCard = ({ project, i, total, progress }) => {
  const start = i / total;
  const targetScale = 1 - (total - 1 - i) * 0.04; // tweak 0.03–0.06
  const rawScale = useTransform(progress, [start, 1], [1, targetScale]);
  const scale = useSpring(rawScale, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 22}px)`,
          transformOrigin: "top",
        }}
        className="relative w-full max-w-5xl mx-4 md:mx-0 h-[520px] md:h-[560px]"
      >
        <Card className="p-0 overflow-hidden backdrop-blur-lg">
          <div className="px-8 pt-8 md:px-10 lg:px-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ">
              <div className="lg:pb-8 lg:pl-8">
                <div className="flex gap-3 text-white/50 text-sm md:text-base lg:text-lg">
                  <span>{project.company}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-semibold text-2xl mt-2 md:mt-5 md:text-4xl lg:text-[40px]">
                  {project.title}
                </h3>

                <hr className="border-t-2 border-white/20 mt-4 md:mt-5" />

                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((results) => (
                    <li
                      key={results.title}
                      className="flex items-center gap-2 text-sm md:text-base lg:text-xl text-white/50"
                    >
                      <GoDotFill className="size-4 md:size-6" />
                      {results.title}
                    </li>
                  ))}
                </ul>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white/10 text-white/70 h-12 w-full md:w-auto px-6 rounded-full inline-flex items-center justify-center tracking-widest gap-2 mt-8 hover:bg-white/20 hover:text-white glass-box-lite">
                    View
                    <LiaExternalLinkAltSolid />
                  </button>
                </a>
              </div>

              <div className="mt-8 -mb-4 lg:-mt-8 overflow-hidden rounded-3xl h-[260px] md:h-[320px]">
                {project.comingSoon || !project.image ? (
                  <ComingSoon />
                ) : (
                  <ProjectImageZoom src={project.image} alt={project.title} />
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div
        className="container flex flex-col min-h-screen items-center justify-center"
      >
        <SectionHeader
          title="My Projects"
          subtitle="Things I have been building lately"
        />

        <div ref={sectionRef} className="flex flex-col">
          {portfolioProjects.map((project, i) => (
            <ProjectStackCard
              key={`${project.title}-${i}`}
              project={project}
              i={i}
              total={portfolioProjects.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
