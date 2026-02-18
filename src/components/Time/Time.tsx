import moment from "moment";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(moment().format("hh:mm:ss A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}
