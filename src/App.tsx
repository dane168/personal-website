import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
