export const getStandardResponse = (code = 0, data, message = '') => {
  if (code === 0) {
    return { code, data, message }
  }
  return { code: code || 1, message }
}