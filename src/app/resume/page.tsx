import Header from "@/components/Header";
import EducationItem from "../../components/education_item";
import { promises as fs } from 'fs';
import { FaHtml5, FaPython } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import WorkSection from "@/components/work";
import { EducationData, WorkData } from "../../../data/types";




export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/education.json', 'utf8');
  const education_data: EducationData[] = JSON.parse(file)

  const file_work = await fs.readFile(process.cwd() + '/data/work.json', 'utf8');
  const work_data: WorkData[] = JSON.parse(file_work)

  return (
    <>
      <div className="text-sm md:text-lg bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-slate-950">
        <div className="md:max-w-[1200px] md:mx-auto">
          <Header />
          <div className="px-6 md:px-8">
            <div className="py-2 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-semibold">Daniel Evans</h1>
              <p className="text-lg my-2">Data engineer | danieljevans168@gmail.com</p>
            </div>
            <div>
              <p className="">Hello! My name is Daniel and this is my personal website. I am a data engineer currently based in the UK with 3 years experience working with an agile development process.</p>
            </div>

            {/* Work section */}
            <WorkSection work_data={work_data} />

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
                <FaHtml5 size={20} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
