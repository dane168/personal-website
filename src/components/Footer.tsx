import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './dark-toggle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='p-4 mx-auto text-center bg-slate-400'>
      <h2 className='text-lg font-semibold'>My links</h2>
      <div className='my-4 flex flex-row justify-center'>
        <div className='mx-2'>
          <Link href={"https://www.linkedin.com/in/daniel-evans-3b4977176"} >
            <FaLinkedin size={30} />
          </Link>
        </div>
        <div className='mx-2'>
          <Link href={"https://github.com/dane168/personal-website"} >
            <FaGithub size={30} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer