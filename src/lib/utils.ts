const dateFormat = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  // Dates are TZ-naïve, which means they default to UTC. We want to render them
  // in UTC so they match the initial value
  timeZone: "UTC",
});

export function formatDate(date: string | Date): string {
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

export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
