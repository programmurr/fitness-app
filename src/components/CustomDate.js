import { useEffect, useState } from "react";
import format from "date-fns/format";
import { formatInTimeZone } from "date-fns-tz";

export default function CustomDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(format(new Date(), "d/M/y"));
  }, []);

  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      const isoDate = newDate.toISOString();
      const ukAdjustedDate = formatInTimeZone(
        isoDate,
        "Europe/London",
        "HH:mm:ss"
      );
      setTime(ukAdjustedDate);
    }, 1000);
  });

  return (
    <div>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
}
