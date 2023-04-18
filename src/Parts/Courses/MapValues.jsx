export const mapValues = (fn, obj) => (
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]))
)
