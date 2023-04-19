import { getCourseTerm } from './GetCourseTerm'
import { timeConflict } from './TimeConflict'

export const courseConflict = (course1, course2) => (
  getCourseTerm(course1) === getCourseTerm(course2) &&
        timeConflict(course1, course2)
)
