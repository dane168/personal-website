import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'

const TechStackItem = ({ src, name, url }: { src: string, name: string, url: string }) => {
  return (
    <div className='m-2 p-2 text-base md:text-xl font-bold flex flex-col items-center hover:scale-105 transition'>
      <Link href={url}>
        <div className='relative h-12 w-12 md:h-20 md:w-20 mx-auto flex items-center justify-center'>
          <img src={src} alt={`${name} logo`} className="h-12 w-12 md:h-20 md:w-20 object-contain" />
        </div>
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default TechStackItem