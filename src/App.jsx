import Background from './components/background/Background';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Aboutme from './components/aboutme/Aboutme';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Aboutme />
        <Experience />
        <Projects />
        <Contact />    
        <Footer />    
      </main>
    </>
  )
}

export default App
