import moment from "moment";
import { useState } from "react";

export default function Date() {
  const [date] = useState(moment().format("dddd, DD MMM, YYYY"));

  return <span>{date}</span>;
}
