import { useState, useEffect } from 'react'
import { addScheduleTimes } from './Elements/Courses/Utils'
import { CourseList } from './Elements/Courses/CourseList'
import { getCourses } from './firebase/api'
import './Css/Index.css'

let isLoading = true

export default function App () {
  const [course, setCourse] = useState()

  const AllCourses = async () => {
    const querySnapshot = await getCourses()
    const docs = []
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), db: doc.id })
    })
    setCourse(addScheduleTimes(docs))
  }

  useEffect(() => {
    AllCourses()
    isLoading = false
  }, [])

  if (isLoading) {
    return <h1>Loading the schedule...</h1>
  } else {
    return (
      <div className="container">
      <h1> CS Courses for 2018-2019</h1>
      <CourseList courses={ course.courses } />
    </div>
    )
  }
}
