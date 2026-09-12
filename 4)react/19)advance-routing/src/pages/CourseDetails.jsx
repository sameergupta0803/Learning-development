import React from 'react'
import { useParams } from 'react-router'

const CourseDetails = () => {
  const course=useParams().courseId
  return (
    <div><h1>{course} Course Details</h1></div>
  )
}

export default CourseDetails