import { formatInTimeZone } from "date-fns-tz";
export default function createTime() {
    const newDate = new Date();
    const isoDate = newDate.toISOString();
    return formatInTimeZone(isoDate, "Europe/London", "HH:mm:ss");
}
