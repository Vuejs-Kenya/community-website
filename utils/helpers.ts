export function convertDate(date: string) {
  const da = new Date(date)
  return da.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
