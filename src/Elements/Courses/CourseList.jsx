import React, { useState } from 'react'
import { Course } from './Course'
import { getCourseTerm } from './Utils'
import { TermSelector } from './TermSelector'

export const CourseList = ({ courses }) => {
  const [term, setTerm] = useState('Fall')
  const [selected, setSelected] = useState([])
  const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course))

  return (
      <>
        <TermSelector term={term} setTerm={setTerm} />
        <div className="course-list">
        {
          termCourses.map(course =>
            <Course
            key={ course.db }
            course={ course }
            selected={selected} setSelected={ setSelected }
            />)
        }
        </div>
      </>
  )
}
