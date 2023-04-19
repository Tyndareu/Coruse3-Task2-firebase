import { mapValues } from './MapValues'
import { addCourseTimes } from './AddCourseTimes'

export const addScheduleTimes = schedule => ({
  courses: mapValues(addCourseTimes, schedule.courses)
})

/* export const addScheduleTimes = schedule => ({
  title: schedule.title,
  courses: mapValues(addCourseTimes, schedule.courses)
})
 */
