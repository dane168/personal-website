import { ModeToggle } from "@/components/dark-toggle";
import Footer from "@/components/Footer";
import TechStackItem from "@/components/TechStackItem";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
        <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 dark:from-black dark:to-slate-900">
          <div className=" max-w-[1200px] mx-auto">
            <div className="p-2 flex justify-end">
              <ModeToggle />
            </div>
            {/*Mobile only*/}
            <div className="md:hidden p-12 pt-0 flex flex-col items-center text-center">
              <div className="m-4 rounded-3xl overflow-hidden shadow-xl">
                <Image src={"/1659083620630.jpeg"} width={120} height={120} alt="icon" className="shadow-2xl" />
              </div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">Hi! I&apos;m Daniel Evans</h1>
              <p className="text-lg md:text-xl">Data engineer from the UK with multiple years experience leading the development of a full-stack application</p>
            </div>
            {/*Medium size or upwards only*/}
            <div className="hidden p-12 pt-0 md:flex flex-row items-center text-left justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">Hi! I&apos;m Daniel Evans</h1>
                <p className="text-lg md:text-xl">Data engineer from the UK with multiple years experience leading the development of a full-stack application</p>

              </div>
              <div className="m-4 rounded-full overflow-hidden shadow-xl">
                <Image src={"/1659083620630.jpeg"} width={200} height={200} alt="icon" className="shadow-2xl" />
              </div>
            </div>

          </div>
        </div>

        <div className="h-16 relative -top-8 rounded-full shadow-2xl overflow-hidden max-w-[1200px] mx-2 md:mx-auto">
          <nav className="h-full overflow-x-scroll flex flex-row justify-evenly items-center bg-white dark:bg-slate-800">
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href="#about-me" className="whitespace-nowrap">About Me</Link>
            </div>
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href="#my-tech-stack" className="whitespace-nowrap">My Tech Stack</Link>
            </div>
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href={"/resume"} className="whitespace-nowrap">Resume</Link>
            </div>
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href="#links" className="whitespace-nowrap">Links</Link>
            </div>
          </nav>
        </div>
        <div className="grow">
          <div id="about-me" className="mx-4 mb-20  text-left max-w-[1000px] md:mx-auto">
            <h1 className="mb-4 text-3xl font-bold">About Me</h1>
            <p className="mb-4">
              My passion for technology began early, sparked by my curiosity about computers. From the moment I started exploring the inner workings of my parents old PC tower and troubleshooting software issues, I developed a deep interest in research and technology that has remained my primary passion to this day.
            </p>
            <p className="mb-4">
              Pursuing a degree in Physics with Space Science provided me with invaluable opportunities to refine my research skills in a professional, real-world setting. Despite this focus, my enthusiasm for computers and software never wavered. Fortunately, many of my assignments also offered the opportunity to enhance my programming skills, particularly through scientific modeling projects in Python and C and trying to utilise basic machine learning algorithms.
            </p>
            <p className="mb-4">
              After graduating, I was fortunate to secure a position as a Data Engineer at Bank of America within the Technology division. This role has afforded me a comprehensive understanding of how large organizations function and how software development teams collaborate in a professional environment. Although my official title is Data Engineer, a significant portion of my work has involved full-stack development, where I contributed to building a website from the ground up. This experience has enabled me to gain proficiency in a wide array of technologies, from building backends in Python and SQL to polisihing the front-end with TypeScript and React.
            </p>
            <p className="mb-4">
              With a strong foundation in software development, data engineering, and problem-solving, I excel in Python, C, SQL, and full-stack development. My experience at Bank of America has sharpened my technical and professional skills, making me a versatile and adaptable team player. Passionate about technology, I&apos;m eager to contribute and grow.
            </p>
          </div>

          <div id="my-tech-stack" className="mb-24 text-center bg-white dark:bg-slate-900">
            <h1 className="text-3xl font-bold">My Tech Stack</h1>
            <div className="flex flex-col items-center">
              {/* Languages */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Languages</h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-python.png"} name={"Python"} url={"https://www.python.org/"} />
                  <TechStackItem src={"/logo-sql.png"} name={"SQL"} url={"https://www.postgresql.org/"} />
                  <TechStackItem src={"/logo-typescript.png"} name={"TypeScript"} url={"https://www.typescriptlang.org/"} />
                  <TechStackItem src={"/logo-js.png"} name={"JavaScript"} url={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} />
                </div>
              </div>
              {/* Front-end */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Frontend</h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-react.png"} name={"React"} url={"https://react.dev/"} />
                  <TechStackItem src={"/logo-html.png"} name={"HTML"} url={"https://developer.mozilla.org/en-US/docs/Web/HTML"} />
                  <TechStackItem src={"/logo-css.png"} name={"CSS"} url={"https://developer.mozilla.org/en-US/docs/Web/CSS"} />
                  <TechStackItem src={"/logo-tailwind.png"} name={"TailwindCSS"} url={"https://tailwindcss.com/"} />
                </div>
              </div>
              {/* Back-end */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Backend </h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-django.png"} name={"Django"} url={"https://www.djangoproject.com/"} />
                  <TechStackItem src={"/logo-pandas.png"} name={"Pandas"} url={"https://pandas.pydata.org/"} />
                  <TechStackItem src={"/logo-fastapi.png"} name={"FastAPI"} url={"https://fastapi.tiangolo.com/"} />
                </div>
              </div>
              {/* Dev tools */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Development tools</h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-linux.png"} name={"Linux"} url={"https://www.linux.org/"} />
                  <TechStackItem src={"/logo-git.png"} name={"git"} url={"https://git-scm.com/"} />
                  <TechStackItem src={"/logo-jira.png"} name={"Jira"} url={"https://www.atlassian.com/software/jira"} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="links">
          <Footer />
        </div>
      </div >
    </>
  );
}
