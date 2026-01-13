import React from 'react'
import SectionHeader from '../SectionHeader'
import Card from './Card'
import me from '/anotherMe.jpg'
import map from '/citymap.png'
import memojidev from '/memojidev.png'
import { RiJavascriptFill} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import TechIcon from './TechIcon'
import CardTitle from './CardTitle'
import ToolboxItems from './Toolboxitems'
import MotionCard from './MotionCard'

const toolbox = [
  { title: "Javascript",
    iconType: RiJavascriptFill
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
    left: "50%",
    top: "5%",
  },
  { title: "Badminton",
    emoji: "🏸",
    left: "10%",
    top: "35%",
  },
  { title: "Movies & shows",
    emoji:  "🎥",
    left: "70%",
    top: "45%",
  },
  { title: "Photography",
    emoji:  "📷",
    left: "45%",
    top: "70%",
  }
]

const Aboutme = () => {
  return (
    <div className='py-20 lg:py-28'>
      <div id='about' className="container flex flex-col min-h-screen items-center justify-center">
        <SectionHeader title="About me" subtitle="A glimpse in my world" />
        <div className='mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 md:grid-rows-auto lg:col-span-3'>
          <MotionCard 
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring", 
            stiffness: 260, 
            damping: 18
          }}
          className='flex flex-col px-8 pt-8 overflow-hidden col-span-3 row-span-2'>
            <CardTitle title = "Who I am" subtitle = "A decently big paragraph abnout myself to tell people what I am interested in and how I love to put myself out there but I really dont A decently big paragraph abnout myself to tell people what I am interested in and how I love to put myself out A decently big paragraph abnout myself to tell people what I am interested in and how I love to put myself out there but I really dont A decently big paragraph abnout myself to tell people what I am interested in and how I love to put myself out" />
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
          className='flex flex-col col-span-2 row-span-2'>
            <CardTitle title="Beyond the Code" subtitle="Explore my interests and hobbies!" className='px-6 py-6 items-start'/>
            <div className='flex flex-col items-center gap-4 mb-6'>
              {hobbies.map(item => (
                <div key={item.title} className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5'>
                  <span className='font-medium text-gray-950'> {item.title} </span>
                  <span className='text-xl'> {item.emoji} </span>
                </div>
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
              <ToolboxItems toolboxItems={toolbox} className='mt-6'/>
              <ToolboxItems toolboxItems={toolbox} className='mt-6' itemsWrapper='-translate-x-1/2'/>
            </div>
          </MotionCard>
        </div>
      </div>
    </div> 
  )
}

export default Aboutme
