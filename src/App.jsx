import { useState } from 'react'
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Scene from "./components/Scene";
import Background from './components/Background';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Aboutme from './components/aboutme/Aboutme';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background />
      <main className= "flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Aboutme />
        <Experience />
        <Projects />
        <Contact />        
      </main>
    </>
  )
}

export default App
