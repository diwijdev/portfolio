import { RiArrowRightUpLine } from "react-icons/ri";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"

const footerLinks = [
    { title: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/diwijdev8/',
      logo: <BsLinkedin /> 
    },
    { title: 'GitHub',
      href: 'https://github.com/diwijdev',
      logo: <BsGithub />
    },
]  


const Footer = () => {
  return (
    <footer className="container py-8 text-sm text-white/70">
      <div className="container">
        <div className="border-t border-white/15 py-6 text-lg md:text-xl flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 ">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-300">
                <span className="font-semibold">{link.logo}</span>
                <span className="font-semibold">{link.title}</span>
                <RiArrowRightUpLine className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
