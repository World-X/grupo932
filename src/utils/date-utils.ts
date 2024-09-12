export function formatDateToYYYYMMDD(date: Date): string {
  return date.toISOString().substring(0, 10)
}

export function formatTimeToHHMM(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}
