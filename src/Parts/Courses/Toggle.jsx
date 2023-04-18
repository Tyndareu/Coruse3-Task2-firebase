export const toggle = (x, lst) => (
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
)
