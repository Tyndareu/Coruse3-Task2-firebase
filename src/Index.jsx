/*  */
import { useState, useEffect } from 'react'
import { addScheduleTimes } from './Parts/Courses/AddScheduleTimes'
import { CourseList } from './Parts/Courses/CourseList'
import { getCourses } from './firebase/api'
import './Css/Index.css'

let isLoading = true

export default function App () {
  const [course, setCourse] = useState()

  const AllCourses = async () => {
    const querySnapshot = await getCourses()
    let docs

    querySnapshot.forEach((doc) => {
      docs = doc.data()
    })
    setCourse(addScheduleTimes(docs))
    isLoading = false
  }

  useEffect(() => {
    isLoading = true
    AllCourses()
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
