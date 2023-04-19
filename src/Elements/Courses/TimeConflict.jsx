import { daysOverlap } from './DaysOverlap'
import { hoursOverlap } from './HoursOverlap'

export const timeConflict = (course1, course2) => (
  daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours)
)
