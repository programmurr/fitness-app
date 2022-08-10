import { formatInTimeZone } from "date-fns-tz";

export default function createTime(): string {
  const newDate: Date = new Date();
  const isoDate: string = newDate.toISOString();
  return formatInTimeZone(isoDate, "Europe/London", "HH:mm:ss");
}
