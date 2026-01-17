import React from 'react'

const TechIcon = ({component}) => {
    const Component = component
  return <>
    <Component className = "size-10 fill-[url(#tech-gradient)]"/>
    <svg className='size-0 absolute'>
      <linearGradient id='tech-gradient'>
        <stop offset='0%' stopColor='#ED1B68'/>
        <stop offset='50%' stopColor='#ED1B68'/>
        <stop offset='100%' stopColor='#9f0b1d'/>
      </linearGradient>
    </svg>
  </>
}

export default TechIcon