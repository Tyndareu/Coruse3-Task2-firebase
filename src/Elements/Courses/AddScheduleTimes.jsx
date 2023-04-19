import { mapValues } from './MapValues'
import { addCourseTimes } from './AddCourseTimes'

export const addScheduleTimes = schedule => ({
  courses: mapValues(addCourseTimes, schedule)
})
