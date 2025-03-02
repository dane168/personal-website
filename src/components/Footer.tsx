import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='p-4 mx-auto w-full text-center bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-black dark:to-slate-900'>
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
      <div className='my-4'>
        Contact: <a href="mailto:danieljevans168@gmail.com">danieljevans168@gmail.com</a>
      </div>
      <div className='my-4'>
        Copyright © {year} Daniel Evans
      </div>
    </div>
  )
}

export default Footer