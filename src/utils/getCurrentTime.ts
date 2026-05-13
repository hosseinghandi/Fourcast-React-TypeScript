import type { NowDataType } from "../types/extraction";

const Days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function getCurrentTime(): NowDataType {
  const now = new Date();
  const dayIndex = now.getDay();
  const today = Days[dayIndex];
  const nextDays = [
    ...Days.slice(dayIndex + 1),
    ...Days.slice(0, dayIndex + 1),
  ];
  const time = now.getHours();
  return { today, time, nextDays };
}
