import { useState, useEffect } from "react"
import { BiX, BiMenu } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"
import { motion as Motion } from "framer-motion";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); 
    const [logoState, setLogoState] = useState("rest");

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const timer = setTimeout(() => setLogoState("rest1"), 4000); // 4s delay
        return () => clearTimeout(timer);
    }, []);


  return (
    <nav className="fixed top-0 z-10 flex w-full items-right justify-between px-12 py-6 text-white md:justify-evenly">
        <Motion.a
            href="#home"
            className="flex items-center"
            initial= "rest"
            animate={logoState}
            whileHover="hover"
        >
            <Motion.svg
                id="target"
                width="40"
                height="40"
                viewBox="0 0 399 399"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={{
                    rest: { opacity: 0, scale: 1 },
                    rest1: { opacity: 0.5, scale: 1, transition: { duration: 0.3 } },
                    hover: { opacity: 1, scale: 1.1, transition: { duration: 0.3 } }
                }}
            >
                <defs>
                    <linearGradient id="lbracketGradient" x1="0" y1="0" x2="0.62" y2="1">
                    <stop offset="0%" stopColor="#F4F4ED" />
                    <stop offset="50%" stopColor="#DFE4EF" />
                    <stop offset="100%" stopColor="#669999" />
                    </linearGradient>

                    <linearGradient id="rbracketGradient" x1="0" y1="0" x2="0.62" y2="1">
                    <stop offset="0%" stopColor="#F4F4ED" />
                    <stop offset="35%" stopColor="#DFE4EF" />
                    <stop offset="90%" stopColor="#669999" />
                    </linearGradient>

                    <linearGradient id="slashGradient" x1="0" y1="0" x2="0.62" y2="1">
                    <stop offset="30%" stopColor="#ED1B68" />
                    <stop offset="100%" stopColor="#9f0b1d" />
                    </linearGradient>
                </defs>
                <path
                    id="leftBracket"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M176.164 68.9825L59.4857 185.661L23.3908 221.756L23.3908 221.756L59.4857 257.851L176.164 374.53L212.259 338.435L95.5806 221.756L212.259 105.077L176.164 68.9825Z"
                    fill="url(#lbracketGradient)"
                />
                <path
                    id="shadow2"
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M134.685 110.462L170.78 146.556L134.685 182.651L98.5905 146.556L134.685 110.462Z"
                    fill="black"
                />
                <rect
                    id="slash"
                    x="362.905"
                    y="399"
                    width="513.225"
                    height="51.0459"
                    transform="rotate(-135 362.905 399)"
                    fill="url(#slashGradient)"
                />
                <path
                    id="shadow1"
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M215.098 251.193L251.193 215.098L287.288 251.193L251.193 287.288L215.098 251.193Z"
                    fill="black"
                />
                <path
                    id="rightBracket"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M337.612 140.551L373.707 176.646L337.612 212.741L220.933 329.42L184.838 293.325L301.517 176.646L184.838 59.9671L220.933 23.8722L337.612 140.551Z"
                    fill="url(#rbracketGradient)"
                />
            </Motion.svg>
        </Motion.a>

        <div className="flex items-center gap-10 px-5">
            <ul className="hidden md:flex gap-10">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </a>

                <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>About me</li>
                </a>

                <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Projects</li>
                </a>

                <a href="#experience" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Experience</li>
                </a>

                <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>

            <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <BsLinkedin />
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                    <BsGithub />
                </li>
            </ul>
        </div>

        {isOpen ? (
            <BiX className = "block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
            <BiMenu className = "block md:hidden text-4xl" onClick={menuOpen}/>
        )}

        {isOpen && (
            <div className={`fixed right-0 top-[84px] flex h-screen w=1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 p-12 ${isOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-8">
                    <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Home</li>
                    </a>

                    <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>About me</li>
                    </a>

                    <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Projects</li>
                    </a>

                    <a href="#experience" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Experience</li>
                    </a>

                    <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Contact</li>
                    </a>
                </ul>

                <ul className="flex flex-wrap gap-5">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                        <BsLinkedin />
                    </li>

                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                        <BsGithub />
                    </li>
                </ul>

            </div>
        )}
        
    </nav>
  )
}

export default Navbar
