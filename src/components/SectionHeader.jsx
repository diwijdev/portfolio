import React from 'react'

const SectionHeader = (
    {title, subtitle}
) => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
        <p className='uppercase font-semibold text-3xl md:text-5xl tracking-widest'>
            {title}
        </p>
        <h2 className='font-light text-white/60 md:text-lg mt-4 max-w-md lg:text-xl'>
            {subtitle}
        </h2>
    </div>
  )
}

export default SectionHeader