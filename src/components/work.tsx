import SkillTag from './skill_tag'
import { WorkData } from '../../data/types'

const WorkSection = ({ work_data }: { work_data: WorkData[] }) => {
  return (
    <>
      <div className="flex flex-col my-4">
        <h1 className="text-xl md:text-2xl font-semibold">Work</h1>

        {
          work_data.map((data, index) => {
            return (
              <div key={index} className="my-4">
                <h2 className="text-lg md:text-xl font-semibold">{data.company}</h2>
                <p className='my-1'>
                  {data.startdate} - {data.enddate}<span className="mx-4">|</span>{data.title}
                </p>
                <div className="my-2 flex flex-row justify-start flex-wrap">
                  {
                    data.skills.map((skill, indx) => {
                      return (
                        <SkillTag key={indx} skill={skill} />
                      )
                    })
                  }
                </div>
                <p className='my-2'>
                  {data.summary}
                </p>
                <ul className='my-2'>
                  {
                    data.achievements.map((achieve, indx) => {
                      return (
                        <li key={indx} className='mx-6 my-4'>
                          <p className='text-lg font-semibold'>{achieve.summary}</p>
                          <div className="my-2 flex flex-row justify-start flex-wrap">
                            {
                              achieve.skills.map((skill, indx) => {
                                return (
                                  <SkillTag key={indx} skill={skill} />
                                )
                              })
                            }
                          </div>
                          <p>{achieve.description}</p>
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

export default WorkSection