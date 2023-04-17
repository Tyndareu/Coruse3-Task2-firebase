/*  */
import { useState, useEffect } from 'react'
import { Banner, addScheduleTimes } from './components/Course'
import { CourseList } from './components/utilities/CourseList'
import { getCourse } from './components/utilities/firebase/api'
import './App.css'
let isLoading = true

const App = () => {
  const [course, setCourse] = useState()

  const AllCourses = async () => {
    const querySnapshot = await getCourse()
    const docs = []
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id })
    })
    setCourse(addScheduleTimes(docs[0]))
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

/*  <Banner title={ course.title } />
      <CourseList courses={ course.courses } /> */
