const days = ['M', 'Tu', 'W', 'Th', 'F']

export const daysOverlap = (days1, days2) => (
  days.some(day => days1.includes(day) && days2.includes(day))
)
