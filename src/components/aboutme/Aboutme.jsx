import React, { useLayoutEffect, useState } from "react";
import SectionHeader from '../SectionHeader'
import me from '/anotherMe.jpg'
import map from '/citymap.png'
import memojidev from '/memojidev.png'
import { RiJavascriptFill, RiTailwindCssFill} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaPython, FaGithubSquare, FaAws} from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import CardTitle from './CardTitle'
import ToolboxItems from './Toolboxitems'
import MotionCard from './MotionCard'
import { motion } from 'framer-motion'

const toolbox = [
  { title: "Javascript",
    iconType: RiJavascriptFill
  },
  { title: "Typescript",
    iconType:  BiLogoTypescript
  },
  { title: "Python",
    iconType:  FaPython
  },
  { title: "SQL",
    iconType:  PiFileSql
  },
  { title: "HTML5",
    iconType: FaHtml5
  },
  { title: "CSS3",
    iconType: FaCss3Alt
  },
  { title: "React",
    iconType:  FaReact
  },
  { title: "TailwindCSS",
    iconType:  RiTailwindCssFill
  },
  { title: "AWS",
    iconType:  FaAws
  },
  { title: "Github",
    iconType:  FaGithubSquare
  }
]

const hobbies = [
  { title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  { title: "Football",
    emoji: "⚽",
    left: "30%",
    top: "20%",
  },
  { title: "Badminton",
    emoji: "🏸",
    left: "10%",
    top: "35%",
  },
  { title: "Movies & shows",
    emoji:  "🎥",
    left: "25%",
    top: "55%",
  },
  { title: "Photography",
    emoji:  "📷",
    left: "5%",
    top: "80%",
  },
  { title: "Piano",
    emoji:  "🎹",
    left: "15%",
    top: "30%",
  }
]

const Aboutme = () => {
  const contraintRef = React.useRef(null);
  const [dragReady, setDragReady] = useState(false);

  useLayoutEffect(() => {
    // wait 1–2 frames so layout + fonts finish
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => setDragReady(true));
      return () => cancelAnimationFrame(r2);
    });
    return () => cancelAnimationFrame(r1);
  }, []);

  return (
    <div id='about' className='py-20 lg:py-28'>
      <div  className="container flex flex-col min-h-screen items-center justify-center">
        <SectionHeader title="About me" subtitle="A glimpse in my world" />
        <div className='mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 md:grid-rows-auto lg:col-span-3'>
          <MotionCard 
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring", 
            stiffness: 260, 
            damping: 18
          }}
          className='flex flex-col px-8 pt-8 overflow-hidden col-span-3 row-span-2'
          >
            <CardTitle title = "Who I am" subtitle = "I’m a developer with a product and data background who enjoys building clean, intuitive experiences around complex information.

            I’ve worked on internal tools and enterprise reporting systems used by large banking and energy organizations, helping translate business requirements and raw data into structured reports, dashboards, and product-ready solutions.
            
            Alongside this, I build modern frontend interfaces using React, Tailwind, and TypeScript, with a strong focus on usability, responsiveness, and clarity.
            "/>
            <div className='mx-auto mt-6 flex-1 flex flex-col justify-center'>
              <img src={me} alt={me} className='rounded-3xl' />
            </div>  
          </MotionCard>
          <MotionCard 
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring", 
            stiffness: 260, 
            damping: 18
          }}
          className="p-0 relative col-span-2 row-span-1">
            <img src={map} alt={map} className='h-full w-full object-cover rounded-3xl'/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-[3px] bg-gradient-to-r from-emerald-300 to-sky-400">
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping'></div>
              <img
                src={memojidev}
                className="size-16 rounded-full bg-black"
              />
            </div>
          </MotionCard>
          <MotionCard 
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring", 
            stiffness: 260, 
            damping: 18
          }}
          className='flex flex-col col-span-2 row-span-2 min-h-[320px]'>
            <CardTitle title="Beyond the Code" subtitle="Explore my interests and hobbies!" className='px-6 py-6 items-start'/>
            <div className='relative flex-1 overflow-hidden rounded-2xl' ref={contraintRef}>
              {hobbies.map(item => (
                <motion.div key={item.title} className='inline-flex items-center gap-2 px-6 border border-gray-500 bg-gradient-to-r from-[#c9c9c5] to-[#7a7f88] rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing select-none' style={{top:item.top, left:item.left}} drag dragConstraints={contraintRef} dragElastic={0.2} dragMomentum={false}>
                  <span className='font-medium text-gray-950'> {item.title} </span>
                  <span className='text-xl'> {item.emoji} </span>
                </motion.div>
              ))}
            </div>
          </MotionCard>
          <MotionCard 
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring", 
            stiffness: 260, 
            damping: 18
          }}
          className='flex flex-col col-span-3 row-span-1'>
            <CardTitle title="My Stack" subtitle= "Things I try to be proficient in" className='px-6 pt-6'/>
            <div className='flex flex-col justify center gap-4 px-2 mb-6'>
              <ToolboxItems toolboxItems={toolbox} className='mt-6' itemsWrapper="animate-move-left"/>
              <ToolboxItems toolboxItems={toolbox} className='mt-6' itemsWrapper='animate-move-right'/>
            </div>
          </MotionCard>
        </div>
      </div>
    </div> 
  )
}

export default Aboutme
