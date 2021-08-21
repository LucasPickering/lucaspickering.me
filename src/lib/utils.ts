const dateFormat = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
});

export function formatDate(date: string | Date): string {
  // TODO fix TZ bug here
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateFormat.format(dateObj);
}

export function compare<T>(value1: T, value2: T): number {
  if (value1 < value2) {
    return -1;
  }
  if (value1 > value2) {
    return 1;
  }
  return 0;
}
