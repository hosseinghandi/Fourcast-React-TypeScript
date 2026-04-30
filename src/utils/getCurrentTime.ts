const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function now() {
  var now = new Date();
  const today = days[now.getDay()];
  const time = now.getHours();
  return [today, time];
}
