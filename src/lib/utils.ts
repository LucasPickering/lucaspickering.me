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

type Comparable = string | number | boolean | Date;

export type KeyFn<T> = [(value: T) => Comparable, "asc" | "desc"];

export type Comparator<T> = (value1: T, value2: T) => number;

/**
 * Build a sorting comparator from key functions
 * @param keyFns One or more key functions to extract a sortable value, in order
 *    of priority
 * @returns A comparator function, to be passed to Array.sort
 */
export function compose<T>(...keyFns: KeyFn<T>[]): Comparator<T> {
  return (a: T, b: T): number => {
    for (const [keyFn, order] of keyFns) {
      const factor = order === "asc" ? 1 : -1;
      const aValue = keyFn(a);
      const bValue = keyFn(b);
      if (aValue < bValue) {
        return -1 * factor;
      }
      if (aValue > bValue) {
        return 1 * factor;
      }
    }
    return 0;
  };
}

export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

/**
 * Check if a value is not null/undefined
 */
export function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

/**
 * Assert the given value is defined. Useful as a type guard when you know
 * something is defined but the typechecker doesn't.
 */
export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (!isDefined(value)) {
    throw new Error(`Expected value to be defined, but was ${value}`);
  }
}
