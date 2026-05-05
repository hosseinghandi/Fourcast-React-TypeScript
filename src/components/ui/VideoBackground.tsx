import { getWeatherCode } from "../../utils/getWeatherCode";
type Props = {
  weather_code: number;
  is_day: number;
};
export default function VideoBackground({ weather_code, is_day }: Props) {
  const { description, category } = getWeatherCode(
    weather_code,
    is_day ? 1 : 0,
  );

  return (
    <>
      <h1>BACKGROUND</h1>
      <h1>{description}</h1>
      <h1>{category}</h1>
    </>
  );
}
