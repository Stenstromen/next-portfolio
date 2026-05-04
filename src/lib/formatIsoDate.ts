/**
 * Format `YYYY-MM-DD` for display without `Date` / locale (identical on server
 * and client — avoids hydration mismatches from timezone parsing).
 */
export function formatIsoDateForDisplay(isoDate: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!m) return isoDate;
  const [, y, mo, d] = m;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ] as const;
  const monthIndex = Number(mo) - 1;
  const day = Number(d);
  if (monthIndex < 0 || monthIndex > 11 || day < 1 || day > 31) {
    return isoDate;
  }
  return `${day} ${months[monthIndex]} ${y}`;
}
