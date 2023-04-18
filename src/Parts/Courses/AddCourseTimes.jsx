import { timeParts } from '../../Components/TimeParts'

export const addCourseTimes = course => ({
  ...course,
  ...timeParts(course.meets)
})
