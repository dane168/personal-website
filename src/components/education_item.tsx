import { EducationData } from '@/app/page'
import React from 'react'

const EducationItem = (data: EducationData) => {
  return (
    <>
      <h1>{data.school}</h1>
      <p>{data.degree}</p>
    </>
  )
}

export default EducationItem