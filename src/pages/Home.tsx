import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { ModeToggle } from '@/components/dark-toggle'

const techCategories = [
  {
    name: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'C']
  },
  {
    name: 'Data & Backend',
    items: ['Kafka', 'FastAPI', 'Django', 'PostgreSQL']
  },
  {
    name: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Next.js']
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Terraform', 'Linux']
  }
]

export default function Home() {
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
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                Projects
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                Contact
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center section-padding pt-24">
        <div className="container-wide">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-primary/20">
                  <img src="/1659083620630.jpeg" alt="Daniel Evans" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Daniel Evans</h1>
                  <p className="text-muted-foreground">Data Engineer</p>
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Data pipelines,{' '}
                <br className="hidden sm:block" />
                <span className="text-gradient">full-stack apps</span>,
                <br />
                and everything in between.
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Building data infrastructure and internal tools at scale.
                Python, SQL, cloud, and a bit of frontend when needed.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  View My Work
                </a>
                <a
                  href="/CV_2025.pdf"
                  download
                  className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  Download CV
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/dane168"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  title="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/daniel-evans-3b4977176"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  title="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="mailto:danieljevans168@gmail.com"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  title="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <a href="#projects" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiArrowDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A mix of work and personal projects spanning data engineering, full-stack development, and whatever else catches my interest.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About/Skills Section */}
      <section id="about" className="py-24 md:py-32 section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Data Engineer with 3+ years of experience at Bank of America, where I've designed
                  and maintained enterprise-scale data pipelines, automated reporting systems, and custom
                  internal tools.
                </p>
                <p>
                  My work spans the full stack - from building Python ETL frameworks and optimizing SQL
                  databases, to developing React dashboards and deploying applications on AWS.
                </p>
                <p>
                  With a Master's in Physics from the University of Leicester, I bring a strong analytical
                  foundation to every project. I'm passionate about turning complex data challenges into
                  practical, scalable solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
              <div className="space-y-6">
                {techCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 rounded-xl bg-card text-card-foreground border border-border font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm always interested in hearing about new opportunities, collaborations,
              or just chatting about data engineering and tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:danieljevans168@gmail.com"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <FiMail size={18} />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/daniel-evans-3b4977176"
                className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>
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
            <a href="https://linkedin.com/in/daniel-evans-3b4977176" className="text-muted-foreground hover:text-foreground transition-colors">
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
