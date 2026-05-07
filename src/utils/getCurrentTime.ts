import type { NowDataType } from "../types/extraction";

const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function getCurrentTime(): NowDataType {
  var now = new Date();
  const today = days[now.getDay() - 1];
  const nextDays = [
    ...days.slice(now.getDay()),
    ...days.slice(0, now.getDay()),
  ];

  const time = now.getHours();
  return { today: today, time: time, nextDays: nextDays };
}
