import { fromDegreeToPoint } from "./fromDegreeToPoint ";
import type { WindData } from "../types/extraction";

type TableStructure = {
  title: string;
  value: number | string;
  unit: string;
  aria: string;
};

export default function createWindData(
  wind_speed_10m: WindData["wind_speed_10m"],
  wind_gusts_10m: WindData["wind_gusts_10m"],
  wind_direction_10m: WindData["wind_direction_10m"],
): TableStructure[] {
  const [shortDirection, fullDirection] = fromDegreeToPoint(wind_direction_10m);
  return [
    {
      title: "Velocity",
      value: wind_speed_10m,
      unit: "m/s",
      aria: "meters per second",
    },
    {
      title: "Gusts",
      value: wind_gusts_10m,
      unit: "m/s",
      aria: "meters per second",
    },
    {
      title: "Direction",
      value: "",
      unit: shortDirection,
      aria: fullDirection,
    },
  ];
}
