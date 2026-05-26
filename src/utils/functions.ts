export const getStartsLabel = (startsDate: string): string => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const startDate = new Date(startsDate)
  startDate.setHours(0, 0, 0, 0)
  return startDate >= today ? 'Starts on' : 'Started on'
}

export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single
