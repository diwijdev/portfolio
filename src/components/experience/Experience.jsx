import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import tc from '/tc.jpg'
import fioneer from "/fioneerWork.jpg"
import tc2 from '/work.JPG'

const experiences = [
  {
    Role: "Product Delivery Specialist",
    Company: "SAP Fioneer",
    Year: "2024-2025",
    image: fioneer,
    position: "70% 40%",
  },
  {
    Role: "Software Developer Contractor",
    Company: "TC Energy",
    Year: "2023",
    image: tc2,
    position: "center 40%",
  },
  {
    Role: "Product Delivery Intern",
    Company: "TC Energy",
    Year: "2022-2023",
    image: tc,
    position: "center 35%",
  },
]

const Experience = () => {
  return (
    <div  className='py-20 lg:py-28'>
      <div id="experience"className='container flex flex-col min-h-screen justify-center'>
        <SectionHeader title="Experience" subtitle="The teams and environments that shaped my journey"/>
        <div className='flex flex-col mt-10 md:mt-16 md:w-3xl lg:w-4xl md:gap-12 lg-gap-16 md:space-y-10 will-change-transform'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 180, damping: 26 }}
              className="group relative overflow-hidden rounded-l-2xl md:border-r-1 px-6 py-10 md:px-12 md:py-12 transform-gpu will-change-[transform] md:h-50"
            >
              {/* Background image (md+) */}
              <img
                src={exp.image}
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="
                  pointer-events-none absolute inset-0 h-full w-full object-cover
                  opacity-0 md:group-hover:opacity-50
                  transition-[opacity,transform] duration-500 ease-out
                  will-change-[opacity]"
                  style={{ objectPosition: exp.position || "center center" }}
              />

              {/* Content */}
              <div className="relative text-center md:text-left">
                <div className="md:flex md:items-center md:justify-between">
                  <h3 className="font-medium text-xl text-white/80 md:text-2xl lg:text-3xl">
                    {exp.Role}
                  </h3>

                  <div className="flex md:flex-col flex-row items-center justify-center md:items-end gap-2 py-6 md:py-0">
                    <p className="text-xl md:text-2xl text-white/70 md:text-white/80">
                      {exp.Company}
                    </p>
                    <p className="md:hidden text-white/40">&bull;</p>
                    <p className="text-white/70">{exp.Year}</p>
                  </div>
                </div>
                <hr className="border-t-2 border-white/20 mt-4 md:mt-5 md:hidden" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Experience
