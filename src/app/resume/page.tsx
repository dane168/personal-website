import Header from "@/components/Header";
import { promises as fs } from 'fs';
import WorkSection from "@/components/work";
import { EducationData, WorkData } from "../../../data/types";
import Footer from "@/components/Footer";
import EducationSection from "@/components/education";


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/education.json', 'utf8');
  const education_data: EducationData[] = JSON.parse(file)

  const file_work = await fs.readFile(process.cwd() + '/data/work.json', 'utf8');
  const work_data: WorkData[] = JSON.parse(file_work)

  return (
    <>
      <div className="min-h-screen flex flex-col text-sm md:text-lg bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-slate-950">
        <div className="grow md:max-w-[1200px] md:mx-auto">
          <Header />

          <div className="px-6 md:px-8">
            <div className="py-2 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-semibold">Daniel Evans</h1>
              <p className="text-lg my-2">Data engineer | danieljevans168@gmail.com</p>
            </div>

            {/* Work section */}
            <WorkSection work_data={work_data} />

            {/* Eductaion section */}
            <EducationSection education_data={education_data} />

          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
