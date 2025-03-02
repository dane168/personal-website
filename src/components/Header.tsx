import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './dark-toggle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className=''>
      <nav className='py-4 flex flex-row justify-between items-center '>
        <div>
          <div className='mx-2 rounded-3xl overflow-hidden'>
            <Link href={"/"}>
              <Image src={"/1659083620630.jpeg"} width={70} height={70} alt='icon' />
            </Link>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mx-2 text-black dark:text-white flex flex-col justify-center items-center'>
            <Link href={"https://www.linkedin.com/in/daniel-evans-3b4977176"} >
              <FaLinkedin size={25} />
            </Link>
          </div>
          <div className='mx-2 text-black dark:text-white flex flex-col justify-center items-center'>
            <Link href={"https://github.com/dane168/personal-website"} >
              <FaGithub size={25} />
            </Link>
          </div>
          <div className='mx-2'>
            <ModeToggle />
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header