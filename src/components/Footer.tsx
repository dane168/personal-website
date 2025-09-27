import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full px-4 py-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 text-center text-sm flex flex-col items-center gap-2">
      <div className="flex flex-row justify-center gap-4 mb-1">
        <Link href={"https://www.linkedin.com/in/daniel-evans-3b4977176"} title="LinkedIn" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <FaLinkedin size={22} />
        </Link>
        <Link href={"https://github.com/dane168/personal-website"} title="GitHub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <FaGithub size={22} />
        </Link>
      </div>
      <div>
        <a href="mailto:danieljevans168@gmail.com" className="underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">danieljevans168@gmail.com</a>
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        © {year} Daniel Evans
      </div>
    </footer>
  )
}

export default Footer