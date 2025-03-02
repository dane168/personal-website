import { ModeToggle } from "@/components/dark-toggle";
import Footer from "@/components/Footer";
import TechStackItem from "@/components/TechStackItem";
import Image from "next/image";
import Link from "next/link";




export default async function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 bg-opacity-50">
          <div className=" max-w-[1200px] mx-auto">
            <div className='p-2 flex justify-end'>
              <ModeToggle />
            </div>
            {/*Mobile only*/}
            <div className="md:hidden p-12 pt-0 flex flex-col items-center text-center">
              <div className="m-4 rounded-3xl overflow-hidden shadow-xl">
                <Image src={"/1659083620630.jpeg"} width={120} height={120} alt='icon' className="shadow-2xl" />
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Hi! I'm Daniel Evans</h1>
              <p className="text-lg md:text-xl">Data engineer from the UK with multiple years experience as a full-stack developer</p>
            </div>
            {/*Medium size or upwards only*/}
            <div className="hidden p-12 pt-0 md:flex flex-row items-center text-left justify-between">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">Hi! I'm Daniel Evans</h1>
                <p className="text-lg md:text-xl">Data engineer from the UK with multiple years experience as a full-stack developer</p>

              </div>
              <div className="m-4 rounded-full overflow-hidden shadow-xl">
                <Image src={"/1659083620630.jpeg"} width={200} height={200} alt='icon' className="shadow-2xl" />
              </div>
            </div>

          </div>
        </div>

        <div className="h-16 relative -top-8 rounded-full shadow-2xl overflow-hidden max-w-[1200px] mx-2 md:mx-auto">
          <nav className="h-full bg-white flex flex-row justify-evenly items-center">
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href="#about-me">About Me</Link>
            </div>
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href="#my-tech-stack">My Tech Stack</Link>
            </div>
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href={"/resume"}>Resume</Link>
            </div>
            <div className="p-3 mx-1 md:mx-8 font-bold md:text-xl">
              <Link href="#links">Links</Link>
            </div>
          </nav>
        </div>
        <div className="grow">
          <div id="about-me" className="mx-4 mb-20 bg-white text-left max-w-[1000px] md:mx-auto">
            <h1 className="mb-4 text-3xl font-bold">About Me</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="mb-4">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <p className="mb-4">
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            </p>
          </div>

          <div id="my-tech-stack" className="mb-24 bg-white text-center">
            <h1 className="text-3xl font-bold">My Tech Stack</h1>
            <div className="flex flex-col items-center">
              {/* Languages */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Languages</h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-python.png"} name={"Python"} />
                  <TechStackItem src={"/logo-sql.png"} name={"SQL"} />
                  <TechStackItem src={"/logo-typescript.png"} name={"TypeScript"} />
                  <TechStackItem src={"/logo-js.png"} name={"JavaScript"} />
                </div>
              </div>
              {/* Front-end */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Frontend</h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-react.png"} name={"React"} />
                  <TechStackItem src={"/logo-html.png"} name={"HTML"} />
                  <TechStackItem src={"/logo-css.png"} name={"CSS"} />
                  <TechStackItem src={"/logo-tailwind.png"} name={"TailwindCSS"} />
                </div>
              </div>
              {/* Back-end */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Backend </h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-django.png"} name={"Django"} />
                  <TechStackItem src={"/logo-pandas.png"} name={"Pandas"} />
                  <TechStackItem src={"/logo-fastapi.png"} name={"FastAPI"} />
                </div>
              </div>
              {/* Dev tools */}
              <div className="my-4">
                <h2 className="text-xl md:text-2xl font-bold">Development tools</h2>
                <div className="flex flex-row flex-wrap">
                  <TechStackItem src={"/logo-linux.png"} name={"Linux"} />
                  <TechStackItem src={"/logo-git.png"} name={"git"} />
                  <TechStackItem src={"/logo-jira.png"} name={"Jira"} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="links">
          <Footer />
        </div>
      </div>
    </>
  );
}
