import solarCurve from "../../constant/solarCurve";
import getCurrentTime from "../../utils/getCurrentTime";
import { sunimageselector } from "../../utils/sunImagePicker";
import { CardTitle, Card } from "..";
type props = {
  sunrise: string[];
  sunset: string[];
};
export default function SunPath({ sunrise, sunset }: props) {
  const { time } = getCurrentTime();
  const takeHourTime = (time: string): number =>
    Number(time.split("T")[1].slice(0, 2));
  const sunSet_H = takeHourTime(sunset[0]);
  const sunRise_H = takeHourTime(sunrise[0]);
  const iconInx = sunimageselector(sunSet_H, sunRise_H, time);
  return (
    <>
      <Card>
        <CardTitle title="Sunpath" underline={true} />
        <div
          id="sun-marker"
          className=" flex flex-row relative 
          border-b-1 pb-small
          min-w-[180px] max-w-[600px] w-full min-h-[100px] mb-small"
        >
          {solarCurve.map(({ Icon, className }, i) => (
            <Icon
              key={`SunIcon-${i}`}
              style={{ color: i === iconInx ? "#ce8312" : "" }}
              className={className}
            />
          ))}
        </div>
        <div className="flex flex-row w-full justify-between">
          <p className="text-secondary">{`${sunrise[0].split("T")[1]} A.M`}</p>
          <p className="text-secondary">{`${sunset[0].split("T")[1]} P.M`}</p>
        </div>
      </Card>
    </>
  );
}
