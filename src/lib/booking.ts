export const SLOTS = ["09:00", "11:00", "14:00", "16:00"];
export const MIN_DAYS_NOTICE = 2;
export const MAX_DAYS_RANGE = 45;

export function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getBookingWindow() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + MIN_DAYS_NOTICE);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + MAX_DAYS_RANGE);
  return { minDate, maxDate };
}
