import type { NowDataType } from "../types/data";

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function getCurrentTime(): NowDataType {
  var now = new Date();
  const today = days[now.getDay()];
  const time = now.getHours();
  return { today: today, time: time };
}
