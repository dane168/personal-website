import Header from "@/components/Header";
import EducationItem from "../components/education_item";
import { promises as fs } from 'fs';

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
      <div className="h-screen md:text-md bg-gradient-to-br from-blue-900 to-blue-300 dark:bg-gradient-to-r dark:from-black dark:to-slate-950">
        <div className="md:max-w-[1200px] md:mx-auto">
          <Header />
          <div className="px-8">
            <div className="py-2 my-8 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-semibold">Daniel Evans</h1>
              <p className="text-lg my-2">Data engineer | danieljevans168@gmail.com</p>
            </div>
            <div>
              <p>Hello! My name is Daniel and this is my personal website. I am a data engineer currently based in Chester, UK with 3 years of experience working in a agile development team</p>
            </div>
            {/* Work section */}
            <div className="flex flex-col my-4">
              <h1 className="text-xl font-semibold">Work</h1>
              {/* Bank of America */}
              <div className="mx-1 flex flex-row justify-between">
                <h2 className="text-lg"> Bank of America</h2>
              </div>
              {/* Tesco */}
              <div>

              </div>
            </div>
            {/* Eductaion section */}
            <div className="flex flex-col items-center">
              Education
              {
                education_data.map((data, index) => {
                  return <EducationItem key={index} {...data} />
                })
              }
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
