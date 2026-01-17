import { BsBoxArrowUpRight } from "react-icons/bs";



const Contact = () => {
  return (
    <div id='contact'  className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container md:px-10 lg:px-20">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 py-8 rounded-3xl text-center">
          <div className="px-10 md:px-14 flex flex-col items-center md:flex md:flex-row md:text-left md:justify-between md:gap-16">
            <div>
              <h2 className="font-medium text-2xl md:text-3xl">Let's get to know each other!</h2>
              <p className="text-sm font-light mt-2 md:text-base">
                It's time to get even, you got to know me a bit, now I would love to know more about you.
              </p>
            </div>
            <a
              href="mailto:hello@diwij.dev?subject=Let's%20Connect&body=Hi%20Diwij,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
              className="group inline-block mt-8 md:mt-0"
            >
              <div className="shine-ring rounded-full p-[2px] transition-transform duration-300 hover:scale-105 active:scale-100">
                <span className="relative block px-8 py-2.5 rounded-full bg-black text-white text-sm md:text-base lg:text-lg font-medium tracking-wide whitespace-nowrap">
                  Contact Me
                </span>
              </div>
            </a>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Contact
