import { isValidMeets } from './IsValidMeets'

export const validateCourseData = (key, val) => {
  switch (key) {
    case 'title': return /(^$|\w\w)/.test(val) ? '' : 'must be least two characters'
    case 'meets': return isValidMeets(val) ? '' : 'must be days hh:mm-hh:mm'
    default: return ''
  }
}
