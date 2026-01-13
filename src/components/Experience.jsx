import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    Role: "Product Delivery Intern",
    Company: "SAP Fioneer",
    Year: "2024-2025",
  },
  {
    Role: "Software Developer Contractor",
    Company: "TC Eenrgy",
    Year: "2023",
  },
  {
    Role: "Product Delivery Intern",
    Company: "TC Energy",
    Year: "2022-2023",
  },
]

const Experience = () => {
  return (
    <div id="experience" className='py-20 lg:py-28'>
      <div className='container flex flex-col min-h-screen justify-center'>
        <SectionHeader title="Experience" subtitle="The teams and environments that shaped my journey"/>
        <div className='flex flex-col mt-5 md:mt-10 md:w-3xl lg:w-4xl will-change-transform'>
          {experiences.map((exp,index) => (
            <motion.div key={index}
            whileHover={{ scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 18 }} 
            className="py-6 md:py-6 text-center">
              <div className='md:flex md:items-center md:justify-between'>
                <h3 className="font-medium text-xl text-white/70 md:text-2xl lg:text-3xl">{exp.Role}</h3>
                <div className='flex md:flex-col flex-row items-center justify-center gap-2 py-6'>
                  <p className="text-xl md:text-2xl text-white/70 md:text-white/80">{exp.Company} </p>
                  <p className='md:hidden'>&bull;</p>
                  <p className='text-white/70'>{exp.Year}</p>
                </div>
              </div>
              <hr className="border-t-2 border-white/20 mt-4 md:mt-8 w-full"/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience