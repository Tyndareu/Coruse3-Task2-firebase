/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { hasConflict } from './utilities/time'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle, auth, firebaseSignOut } from './utilities/firebase/firebase'
import { Button } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'

export const Banner = ({ title }) => (
    <h1>{ title }</h1>
)

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' }

export const getCourseTerm = course => (
  terms[course.id.charAt(0)]
)

const getCourseNumber = course => (
  course.id.slice(1, 4)
)

const toggle = (x, lst) => (
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
)
export const Course = ({ course, selected, setSelected }) => {
  const navigate = useNavigate()
  const isSelected = selected.includes(course)
  const isDisabled = !isSelected && hasConflict(course, selected)
  const style = {
    backgroundColor: isDisabled ? 'lightgrey' : isSelected ? 'lightgreen' : 'white'
  }
  return (
    <div className="card m-1 p-2"
      style={style}
      onClick={isDisabled ? null : () => setSelected(toggle(course, selected))}
      onDoubleClick={() => navigate('/edit', { state: course })}>
      <div className="card-body">
        <div className="card-title">{ getCourseTerm(course) } CS { getCourseNumber(course) }</div>
        <div className="card-text">{ course.title }</div>
        <div className="card-text">{ course.meets }</div>
      </div>
    </div>
  )
}

const TermButton = ({ term, setTerm, checked }) => (
  <>
    <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
      onChange={() => setTerm(term)} />
    <label className="btn btn-success m-1 p-2" htmlFor={term}>
    { term }
    </label>
  </>
)

const SignInButton = () => (
  <Button className="btn btn-primary m-1 p-2"
    onClick={() => { signInWithGoogle() }}>
    Sign In</Button>
)
const SignOutButton = () => (
  <Button className="btn btn-primary m-1 p-2"
        onClick={() => firebaseSignOut() }>Sign Out</Button>
)

export const TermSelector = ({ term, setTerm }) => {
  const [user] = useAuthState(auth)

  return (
    <div className="btn-toolbar justify-content-center">
      <div className="btn-group">

      {
        Object.values(terms).map(
          value => <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
        )
      }
      { user ? <SignOutButton /> : <SignInButton /> }
      </div>

    </div>
  )
}

const meetsPat = /^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/

export const timeParts = meets => {
  const [match, days, hh1, mm1, hh2, mm2] = meetsPat.exec(meets) || []
  return !match
    ? {}
    : {
        days,
        hours: {
          start: hh1 * 60 + mm1 * 1,
          end: hh2 * 60 + mm2 * 1
        }
      }
}

const mapValues = (fn, obj) => (
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]))
)

const addCourseTimes = course => ({
  ...course,
  ...timeParts(course.meets)
})

export const addScheduleTimes = schedule => ({
  title: schedule.title,
  courses: mapValues(addCourseTimes, schedule.courses)
})

export const courseConflict = (course1, course2) => (
  getCourseTerm(course1) === getCourseTerm(course2) &&
      timeConflict(course1, course2)
)
const timeConflict = (course1, course2) => (
  daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours)
)

const days = ['M', 'Tu', 'W', 'Th', 'F']

const daysOverlap = (days1, days2) => (
  days.some(day => days1.includes(day) && days2.includes(day))
)

const hoursOverlap = (hours1, hours2) => (
  Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end)
)
