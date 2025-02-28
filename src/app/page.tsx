import Header from "@/components/Header";
import EducationItem from "../components/education_item";
import { promises as fs } from 'fs';
import { FaHtml5, FaPython } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

export type EducationData = {
  school: string;
  degree: string;
  start_date: string;
  end_date: string;
  location: string;
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/education.json', 'utf8');
  const education_data: EducationData[] = JSON.parse(file)

  return (
    <>
      <div className="h-screen md:text-md bg-gradient-to-br from-blue-900 to-blue-300 dark:from-black dark:to-slate-950">
        <div className="md:max-w-[1200px] md:mx-auto">
          <Header />
          <div className="px-6 md:px-8">
            <div className="py-2 my-8 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-semibold">Daniel Evans</h1>
              <p className="text-lg my-2">Data engineer | danieljevans168@gmail.com</p>
            </div>
            <div>
              <p>Hello! My name is Daniel and this is my personal website. I am a data engineer currently based in Chester, UK with 3 years experience working in a professional agile development team.</p>
            </div>

            {/* Work section */}
            <div className="flex flex-col my-4">
              <h1 className="text-xl font-semibold">Work</h1>

              {/* Bank of America */}
              <div className="mx-1 my-4">
                <h2 className="text-lg"> Bank of America</h2>
                <p>2022 - Present<span className="mx-4">|</span>Data Engineer</p>
              </div>

              {/* Tesco */}
              <div className="mx-1 my-4">
                <h2 className="text-lg"> Tesco</h2>
                <p>2020 - 2022<span className="mx-4">|</span>Customer Assitant & Shift Leader</p>
              </div>
            </div>

            {/* Eductaion section */}
            <div className="flex flex-col my-4">
              <h1 className="text-xl font-semibold">Education</h1>
              {
                education_data.map((data, index) => {
                  return <EducationItem key={index} {...data} />
                })
              }
            </div>

            {/* Technologies section */}
            <div className="flex flex-col my-4">
              <h1 className="text-xl font-semibold">My Tech Stack</h1>
              <div className="my-8 flex flex-row justify-evenly">
                <FaPython size={25} />
                <DiMsqlServer size={25} />
                <SiTypescript size={25} />
                <FaHtml5 size={25} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
