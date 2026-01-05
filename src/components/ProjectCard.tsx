import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { FiArrowRight } from 'react-icons/fi'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/projects/${project.id}`}>
        <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
          {/* Visual Side */}
          <div className="w-full lg:w-1/2">
            <div className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.gradient} p-8 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
              {/* Abstract pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-black/10 blur-2xl" />
              </div>

              {/* Icon */}
              <div className="relative h-full flex items-center justify-center">
                <span className="text-8xl md:text-9xl filter drop-shadow-lg">{project.icon}</span>
              </div>

              {/* Status badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  project.status === 'live'
                    ? 'bg-green-500/20 text-white border border-green-400/30'
                    : 'bg-amber-500/20 text-white border border-amber-400/30'
                }`}>
                  {project.status === 'live' ? 'Live' : 'In Development'}
                </span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {project.tagline}
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground">
                  +{project.techStack.length - 5} more
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                View Project <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
