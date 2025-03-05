import React from 'react'
import { EducationData } from '../../data/types'
import SkillTag from './skill_tag'

const EducationSection = ({ education_data }: { education_data: EducationData[] }) => {
  return (
    <>
      <div className="flex flex-col my-4">
        <h1 className="text-xl md:text-2xl font-semibold">Education</h1>

        {
          education_data.map((data, index) => {
            return (
              <div key={index} className="my-4">
                <h2 className="text-lg md:text-xl font-semibold">{data.school}</h2>
                <p className='my-1'>
                  {data.start_date} - {data.end_date}<span className="mx-4">|</span>{data.degree}
                </p>
                <div className="my-2 flex flex-row justify-start flex-wrap">
                </div>
                <p className='my-2'>
                  {data.summary}
                </p>

                <ul className='my-2'>
                  {
                    data.projects.map((project, indx) => {
                      return (
                        <li key={indx} className='mx-6 my-4'>
                          <p className='text-lg font-semibold'>{project.title}</p>
                          <div className="my-2 flex flex-row justify-start flex-wrap">
                            {
                              project.skills.map((skill, indx) => {
                                return (
                                  <SkillTag key={indx} skill={skill} />
                                )
                              })
                            }
                          </div>
                          <p>{project.description}</p>
                        </li>
                      )
                    })
                  }
                </ul>

              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default EducationSection