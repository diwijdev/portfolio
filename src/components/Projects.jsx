import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import among from '/among.png'
import me from '/anotherMe.jpg'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import SectionHeader from './SectionHeader';
import Card from './aboutme/Card';

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
    title: "AI Startup Landing Page",
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
    offset: ["start end", "start center"], // start zooming when container enters, finish when it reaches top
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]); // zoomed in -> normal

  return (
    <div ref={containerRef} className="relative w-full">
      <motion.img
        src={src}
        alt={alt}
        style={{ scale }}
        className="w-full h-full object-cover block will-change-transform"
      />
    </div>
  );
};



const Projects = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div id='projects' className="container flex flex-col min-h-screen items-center justify-center">
        <SectionHeader title= "My Projects" subtitle="Things I have been working on recently"/>
        <div className="flex flex-col mt-10 gap-20  md:pt-12 md:px-10 lg:pt-16 lg:px-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="backdrop-blur-md px-8 pt-8 overflow-hidden md:pt-8 md:px-10 lg:px-10 sticky" 
            style={{ top: `calc(124px + ${projectIndex * 70}px)`}}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:overflow-hidden'>  
                <div className='lg:pb-8 lg:pl-8'>
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                  <h3 className='font-semibold text-2xl mt-2 md:mt-5 md:text-4xl'>{project.title}</h3>
                  <hr className='border-t-2 border-white/20 mt-4 md:mt-5'/>
                  <ul className='flex flex-col gap-4 mt-4'>
                    {project.results.map((results) => (
                      <li className='flex items-center gap-2 text-sm md:text-base text-white/50 '>
                        <GoDotFill className='size-4 md:size-6'/>
                        {results.title}
                      </li>
                    ))} 
                  </ul>
                  <a href = {project.link}>
                    <button className='bg-white/10 text-white/50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/20 hover:text-white transition-all duration-300 '> 
                        View
                        <LiaExternalLinkAltSolid />
                    </button>
                  </a>
                </div>
                <div className="relative overflow-hidden rounded-3xl mt-8 -mb-4 lg:-mt-8">
                  <ProjectImageZoom src={project.image} alt={project.title} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
