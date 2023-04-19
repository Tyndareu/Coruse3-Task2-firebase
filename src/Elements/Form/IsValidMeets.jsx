import { timeParts } from '../Courses/Utils'

export const isValidMeets = (meets) => {
  const parts = timeParts(meets)
  return (meets === '' || (parts.days && !isNaN(parts.hours?.start) && !isNaN(parts.hours?.end)))
}
