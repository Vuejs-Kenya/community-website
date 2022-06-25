export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(date))
}
