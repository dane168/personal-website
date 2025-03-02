"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="h-4 hover:cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <div className="dark:hidden">
        <IoSunnyOutline size={25} />
      </div>
      <div className="hidden dark:block">
        <IoMoonOutline size={25} />
      </div>
    </div>
  )
}
