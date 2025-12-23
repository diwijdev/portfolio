import React from 'react'
import SectionHeader from '../SectionHeader'
import Card from './Card'
import among from '/among.png'
import me from '/anotherMe.jpg'
import map from '/citymap.png'
import { RiJavascriptFill} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import TechIcon from './TechIcon'
import CardTitle from './CardTitle'

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
    emoji: "🎮"
  },
  { title: "Football",
    emoji: "⚽"
  },
  { title: "Badminton",
    emoji: "🏸"
  },
  { title: "Movies & shows",
    emoji:  "🎥"
  },
  { title: "Photography",
    emoji:  "📷"
  }
]

const Aboutme = () => {
  return (
    <div className='py-20'>
      <div id='aboutme' className="container flex flex-col min-h-screen items-center justify-center">
        <SectionHeader title="About me" subtitle="A glimpse in my world" />
        <div className='mt-20'>
          <Card className={'px-8 pt-8 overflow-hidden md:pt-8 md:px-10 lg:px-20'}>
            <CardTitle title = "Who I am" subtitle = "A decently big paragraph abnout myself to tell people what I am interested in and how I love to put myself out there but I really dont." />
            <div className='mx-auto mt-6'>
              <img src={me} alt={me} className='rounded-3xl' />
            </div>  
          </Card>
          <Card>
            <CardTitle title="My Stack" subtitle= "Things I try to be proficient in"/>
            <div>
              {toolbox.map(item => (
                <div key={item.title} className='inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg '>
                  <TechIcon component={item.iconType}/>
                  <span className='font-semibold'> {item.title} </span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardTitle title="Beyond the Code" subtitle="Explore my interests and hobbies!"/>
            <div>
              {hobbies.map(item => (
                <div key={item.title}>
                  <span> {item.title} </span>
                  <span className='text-xl'> {item.emoji} </span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <img src={map} alt={map} className='rounded-3xl'/>
          </Card>
        </div>
      </div>
    </div> 
  )
}

export default Aboutme