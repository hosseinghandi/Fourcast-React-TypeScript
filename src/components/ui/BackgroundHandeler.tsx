import { useState } from "react";
import { getWeatherCode } from "../../utils/getWeatherCode";
import { bgPlaceholder } from "../../constant/bgPlaceholder";

type Props = {
  weather_code: number;
  is_day: number;
};
export default function BackgroundHandeler({ weather_code, is_day }: Props) {
  const { category } = getWeatherCode(weather_code, is_day ? 1 : 0);
  const backgroundColor = bgPlaceholder[category];
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover 
        -z-10 opacity-70 pointer-events-none scale-110"
      >
        <source src={`videos/${category}.mp4`} type="video/mp4" />
      </video>
      <div
        style={{
          backgroundColor: backgroundColor,
          opacity: loaded ? "0" : "100",
        }}
        className="fixed inset-0 h-full w-full object-cover 
        -z-10 opacity-70 pointer-events-none transition-opacity duration-500 "
      ></div>
    </>
  );
}
