import { courseConflict } from '../Course'

export const hasConflict = (course, selected) => (
  selected.some(selection => courseConflict(course, selection))
)
