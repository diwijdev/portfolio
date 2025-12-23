import React from 'react'

const CardTitle = ({title, subtitle}) => {
  return (
    <div className='flex flex-col'>
        <div>
        <h3 className='font-bold text-2xl my-2 md:mt-5 md:text-4xl'>{title}</h3>
        </div>
        <p className='font-light text-white/60 mt-2'>{subtitle}</p>
    </div>
  )
}

export default CardTitle