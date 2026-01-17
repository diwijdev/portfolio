import Background from './components/background/Background';
import { Hero } from './components/hero/Hero';
import Aboutme from './components/aboutme/Aboutme';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import Header from './components/nav/Header';

function App() {
  return (
    <>
      <Background />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Header />
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
