import { format } from 'date-fns';

/**
 * Formats a given date string to a user-friendly format.
 * Example: '2025-01-01' -> 'Jan 1, 2025'
 *
 * @param date - The date string to be formatted.
 * @returns The formatted date string in 'MMM d, yyyy' format.
 */
export function formatDateToUI(date: string) {
  return format(date as string, 'MMM d, yyyy');
}
