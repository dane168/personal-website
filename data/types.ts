export type EducationData = {
  school: string;
  degree: string;
  start_date: string;
  end_date: string;
  location: string;
  summary: string;
  projects: {
    title: string;
    description: string;
    skills: [
      string
    ]
  }[]
}

export type WorkData = {
  company: string;
  startdate: string;
  enddate: string;
  title: string;
  summary: string;
  achievements: {
    summary: string
    description: string
    skills: [string]
  }[]
  skills: [string]
}