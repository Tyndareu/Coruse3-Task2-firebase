/*  */
import { useState, useEffect } from 'react'
import { Banner, addScheduleTimes } from './components/Course'
import { CourseList } from './components/utilities/CourseList'
import { getCourses } from './components/utilities/firebase/api'

import './App.css'
let isLoading = true

const App = () => {
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
      <Banner title={ course.title } />
      <CourseList courses={ course.courses } />
    </div>
    )
  }
}
export default App
