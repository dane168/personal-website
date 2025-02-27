import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-900'>
      <nav className='py-4 mx-auto max-w-[1200px] flex flex-row justify-between items-center '>
        <div>
          <div className='mx-2 rounded-full overflow-hidden'>
            <Image src={"/1000006170.jpg"} width={100} height={100} alt='icon' />
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mx-2 text-white'>
            <Link href="/" >Home</Link>
          </div>
          <div className='mx-2 text-white'>
            <Link href="/" >Home</Link>
          </div>
          <div className='mx-2 text-white'>
            <Link href="/" >Home</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header