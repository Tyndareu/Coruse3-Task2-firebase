import { timeParts } from './TimeParts'

export const addCourseTimes = course => ({
  ...course,
  ...timeParts(course.meets)
})
