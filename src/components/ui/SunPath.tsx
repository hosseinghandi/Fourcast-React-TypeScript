import solarCurve from "../../constant/solarCurve";
import getCurrentTime from "../../utils/getCurrentTime";
import { sunimageselector } from "../../utils/sunImagePicker";
import CardTitle from "../shared/CardTitle";
type props = {
  sunrise: string[];
  sunset: string[];
};
export default function SunPath({ sunrise, sunset }: props) {
  const { time } = getCurrentTime();
  const iconInx = sunimageselector(sunrise[0], sunset[0], time);

  return (
    <>
      <CardTitle title="Sunpath" underline={true} />
      <h1>{sunrise[0]}</h1>
      <h1>{sunset[0]}</h1>
      <div
        id="sun-marker"
        className=" flex flex-row relative w-[200px] h-[100px]border-1"
      >
        {solarCurve.map(({ Icon, className }, i) => (
          <Icon
            style={{ color: i === iconInx ? "orange" : "" }}
            className={className}
          />
        ))}
      </div>
    </>
  );
}
