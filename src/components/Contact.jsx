import { BsBoxArrowUpRight } from "react-icons/bs";



const Contact = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container md:px-10 lg:px-20">
        <div className="bg-gradient-to-r from-blue-950 via-pink-900 to-red-500 py-8 rounded-3xl text-center">
          <div className="px-10 md:px-14 flex flex-col items-center md:flex md:flex-row md:text-left md:justify-between md:gap-16">
            <div>
              <h2 className="font-medium text-2xl md:text-3xl">Let's get to know each other!</h2>
              <p className="text-sm font-light mt-2 md:text-base">
                It's time to get even, you got to know me a bit, now I would love to know more about you.
              </p>
            </div>
            <button className="bg-black inline-flex items-center gap-2 px-6 h-12 mt-8 md:mt-0 rounded-3xl tracking-wide whitespace-nowrap">
              <span className="font-semibold">Contact Me</span>
              <BsBoxArrowUpRight className="size-3"/> 
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Contact
