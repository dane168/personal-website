import { useTheme } from '@/components/theme-provider'
import { FiSun, FiMoon } from 'react-icons/fi'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(systemDark ? 'light' : 'dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      title="Toggle theme"
    >
      <FiSun size={18} className="dark:hidden" />
      <FiMoon size={18} className="hidden dark:block" />
    </button>
  )
}
