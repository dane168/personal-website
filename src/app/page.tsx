import { ModeToggle } from "@/components/dark-toggle";
import Footer from "@/components/Footer";
import TechStackItem from "@/components/TechStackItem";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="flex-1">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>
          {/* Hero Section - Concise Summary */}
          <div className="md:flex flex-row items-center text-left justify-between mb-8">
            <div className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left">
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">Hi! I'm Daniel Evans</h1>
              <p className="text-lg md:text-xl mb-2">Data Engineer | danieljevans168@gmail.com</p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-2">
                Building robust data solutions and automation for enterprise-scale systems. Experienced in Python, SQL, cloud, and full-stack development. Passionate about turning complex requirements into practical, scalable tools.
              </p>
              <div className="flex flex-row gap-4 justify-center md:justify-start mt-2">
                <Link href="/resume" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">View Full Resume</Link>
                <a href="/CV_2025.pdf" download className="px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-indigo-300 dark:border-slate-600 text-indigo-700 dark:text-indigo-200 font-semibold shadow hover:bg-indigo-50 dark:hover:bg-slate-700 transition">Download CV</a>
              </div>
            </div>
            <div className="m-4 rounded-full overflow-hidden shadow-xl flex justify-center items-center">
              <Image src={"/1659083620630.jpeg"} width={200} height={200} alt="icon" className="shadow-2xl" />
            </div>
          </div>
          {/* About Section - Short Summary */}
          <section id="about-me" className="mb-12">
            <h1 className="mb-4 text-3xl font-bold">About Me</h1>
            <p className="mb-4">
              I am a data engineer with a passion for building robust, scalable solutions that turn raw data into actionable insights. With 3+ years of experience at Bank of America, I have designed and maintained enterprise-scale data pipelines, automated reporting systems, and custom internal tools that empower teams to work smarter and faster.
            </p>
            <p className="mb-4">
              My technical toolkit includes Python, SQL, cloud platforms (AWS), and a range of modern frameworks for both backend and frontend development. I thrive on solving complex problems, whether it’s optimizing ETL workflows, developing interactive dashboards, or deploying full-stack applications in production environments.
            </p>
            <p className="mb-4">
              I enjoy collaborating with stakeholders to understand business needs and deliver practical, user-friendly solutions. My background in physics with a focus on scientific modelling gives me a strong analytical foundation and a drive to keep learning and innovating in the fast-moving world of data and technology.
            </p>
          </section>
          {/* Tech Stack Section - Short Summary */}
          <section id="my-tech-stack" className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-6">My Tech Stack</h1>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Languages */}
              <TechStackItem src="/tech-logos/python.svg" name="Python" url="https://www.python.org/" />
              <TechStackItem src="/tech-logos/mysql.svg" name="SQL" url="https://en.wikipedia.org/wiki/SQL" />
              <TechStackItem src="/tech-logos/c.svg" name="C" url="https://en.wikipedia.org/wiki/C_(programming_language)" />
              <TechStackItem src="/tech-logos/javascript.svg" name="JavaScript" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
              <TechStackItem src="/tech-logos/typescript.svg" name="TypeScript" url="https://www.typescriptlang.org/" />
              {/* Frameworks & Libraries */}
              <TechStackItem src="/tech-logos/django.svg" name="Django" url="https://www.djangoproject.com/" />
              <TechStackItem src="/tech-logos/fastapi.svg" name="FastAPI" url="https://fastapi.tiangolo.com/" />
              <TechStackItem src="/tech-logos/pandas.svg" name="Pandas" url="https://pandas.pydata.org/" />
              <TechStackItem src="/tech-logos/react.svg" name="React" url="https://react.dev/" />
              <TechStackItem src="/tech-logos/tailwindcss.svg" name="Tailwind CSS" url="https://tailwindcss.com/" />
              {/* Data Engineering & ETL */}
              <TechStackItem src="/tech-logos/apachekafka.svg" name="Kafka" url="https://kafka.apache.org/" />
              <TechStackItem src="/tech-logos/broadcom.svg" name="AutoSys" url="https://www.broadcom.com/products/software/automation/autosys" />
              {/* Databases & Storage */}
              <TechStackItem src="/tech-logos/microsoftsqlserver.svg" name="MS SQL Server" url="https://www.microsoft.com/en-us/sql-server/" />
              <TechStackItem src="/tech-logos/postgresql.svg" name="PostgreSQL" url="https://www.postgresql.org/" />
              <TechStackItem src="/tech-logos/aws.svg" name="AWS S3" url="https://aws.amazon.com/s3/" />
              {/* Cloud & Infrastructure */}
              <TechStackItem src="/tech-logos/apache.svg" name="Apache HTTP Server" url="https://httpd.apache.org/" />
              <TechStackItem src="/tech-logos/prometheus.svg" name="Prometheus" url="https://prometheus.io/" />
              <TechStackItem src="/tech-logos/grafana.svg" name="Grafana" url="https://grafana.com/" />
              {/* Visualisation & Analytics */}
              <TechStackItem src="/tech-logos/tableau.svg" name="Tableau" url="https://www.tableau.com/" />
              {/* Collaboration & Version Control */}
              <TechStackItem src="/tech-logos/git.svg" name="Git" url="https://git-scm.com/" />
              <TechStackItem src="/tech-logos/bitbucket.svg" name="Bitbucket" url="https://bitbucket.org/" />
              <TechStackItem src="/tech-logos/jira.svg" name="Jira" url="https://www.atlassian.com/software/jira" />
              {/* OS & Cloud */}
              <TechStackItem src="/tech-logos/linux.svg" name="Linux" url="https://www.linux.org/" />
              <TechStackItem src="/tech-logos/aws.svg" name="AWS" url="https://aws.amazon.com/" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
