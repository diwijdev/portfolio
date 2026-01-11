import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({className, children, ...props}) => {

  return (
    <div {...props} className={twMerge("bg-[#0f151f]/70 rounded-3xl border border-white/20 p-6", className)}>
      {children}
    </div>
  )
}

export default Card
