import EducationItem from "../components/education_item";

export type EducationData = {
  school: string;
  degree: string;
  start_date: string;
  end_date: string;
  location: string;
}

export default function Home() {
  const education_data = [{
    school: "University of Leicester",
    degree: "MPhys in Physics with Space Science",
    start_date: "2018",
    end_date: "2022",
    location: "Leicester, UK",
  }]

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">

        <h1 className="text-4xl font-semibold">Daniel Evans</h1>
        <p>Data engineer</p>
      </div>
      <div className="flex flex-col items-center">
        {
          education_data.map((data, index) => {
            return <EducationItem key={index} {...data} />
          })
        }
      </div>
    </>
  );
}
