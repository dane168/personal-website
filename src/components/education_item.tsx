import React from 'react'
import { EducationData } from '../../data/types'

const EducationItem = (data: EducationData) => {
  return (
    <>
      <h1>{data.school}</h1>
      <p>{data.degree}</p>
    </>
  )
}

export default EducationItem