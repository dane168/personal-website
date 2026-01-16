import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '@/data/projects'
import { ModeToggle } from '@/components/dark-toggle'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 section-padding py-4">
        <div className="container-wide">
          <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
            <Link to="/" className="font-bold text-lg">
              DE<span className="text-primary">.</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                Projects
              </Link>
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                About
              </Link>
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                Contact
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="mb-8 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <FiArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'live'
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  }`}>
                    {project.status === 'live' ? 'Live Project' : 'In Development'}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {project.title}
                </h1>

                <p className="text-xl text-muted-foreground">
                  {project.tagline}
                </p>

                {project.links && (
                  <div className="flex flex-wrap gap-3 pt-4 relative z-20">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 relative z-20"
                      >
                        <FiExternalLink size={16} />
                        View Live
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors inline-flex items-center gap-2 relative z-20"
                      >
                        <FiGithub size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.gradient} p-8 overflow-hidden glow relative`}>
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-black/10 blur-2xl" />
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <span className="text-8xl md:text-9xl filter drop-shadow-lg">{project.icon}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {project.longDescription?.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.status === 'in-development' && (
                <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                  <h3 className="font-bold mb-2 text-amber-600 dark:text-amber-400">In Development</h3>
                  <p className="text-sm text-muted-foreground">
                    This project is currently being designed and built. Check back soon for updates!
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/projects/${otherProject.id}`}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${otherProject.gradient} flex items-center justify-center text-2xl`}>
                      {otherProject.icon}
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {otherProject.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-border">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daniel Evans.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/dane168" className="text-muted-foreground hover:text-foreground transition-colors">
              <FiGithub size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
