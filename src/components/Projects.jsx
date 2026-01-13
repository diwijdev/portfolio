import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import among from "/among.png";
import me from "/anotherMe.jpg";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import SectionHeader from "./SectionHeader";
import Card from "./aboutme/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: among,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: me,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: among,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page 2",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: among,
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
        className="relative w-full max-w-4xl mx-4 md:mx-0"
      >
        <Card className="p-0 overflow-hidden backdrop-blur-md">
          <div className="px-8 pt-8 md:px-10 lg:px-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:overflow-hidden">
              <div className="lg:pb-8 lg:pl-8">
                <div className="flex gap-3 text-white/50 text-sm">
                  <span>{project.company}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-semibold text-2xl mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>

                <hr className="border-t-2 border-white/20 mt-4 md:mt-5" />

                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((results) => (
                    <li
                      key={results.title}
                      className="flex items-center gap-2 text-sm md:text-base text-white/50"
                    >
                      <GoDotFill className="size-4 md:size-6" />
                      {results.title}
                    </li>
                  ))}
                </ul>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white/10 text-white/70 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/20 hover:text-white transition-all duration-300">
                    View
                    <LiaExternalLinkAltSolid />
                  </button>
                </a>
              </div>

              <div className="mt-8 -mb-4 lg:-mt-8 overflow-hidden rounded-3xl h-[260px] md:h-[320px]">
                <ProjectImageZoom src={project.image} alt={project.title} />
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
    <section className="pb-16 lg:py-24">
      <div
        id="projects"
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
