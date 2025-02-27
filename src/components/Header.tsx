import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './dark-toggle'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <div className=''>
      <nav className='py-4 mx-auto max-w-[1200px] flex flex-row justify-between items-center '>
        <div>
          <div className='mx-2 rounded-full overflow-hidden'>
            <Image src={"/1000006170.jpg"} width={100} height={100} alt='icon' />
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mx-4 text-black dark:text-white flex flex-col justify-center items-center'>
            <Link href="/" className='align-middle text-lg'>Experience</Link>
          </div>
          <div className='mx-4 text-black dark:text-white flex flex-col justify-center items-center'>
            <Link href="/" className='align-middle text-lg'>Education</Link>
          </div>
          <div className='mx-4 text-black dark:text-white flex flex-col justify-center items-center'>
            <Link href="/" className='align-middle text-lg'>Skills</Link>
          </div>
          <div className='mx-4 text-black dark:text-white flex flex-col justify-center items-center'>
            <Link href={"https://github.com/dane168/personal-website"} >
              <FaGithub size={30} />
            </Link>
          </div>
          <div className='me-2'>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header