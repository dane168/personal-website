import React from 'react'
import Image from 'next/image'

const TechStackItem = ({ src, name }: { src: string, name: string }) => {
  return (
    <div className='m-2 p-2 text-base md:text-xl font-bold flex flex-col items-center '>
      <div className='relative h-12 w-12 md:h-20 md:w-20'>
        <Image fill={true} src={src} alt={`${name} logo`} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default TechStackItem