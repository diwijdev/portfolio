import React from 'react'
import { twMerge } from 'tailwind-merge'

const CardTitle = ({ title, subtitle, className }) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <h3 className="font-bold text-2xl my-2 md:mt-5 md:text-4xl">
        {title}
      </h3>

      <p className="font-light text-white/60 mt-2 whitespace-pre-line">
        {subtitle}
      </p>

    </div>
  );
};


export default CardTitle
