import { courseConflict } from './CourseConflict'

export const hasConflict = (course, selected) => (
  selected.some(selection => courseConflict(course, selection))
)
