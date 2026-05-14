import solarCurve from "../../constant/solarCurve";
import getCurrentTime from "../../utils/getCurrentTime";
import { sunimageselector } from "../../utils/sunImagePicker";
import { CardTitle, Card } from "..";
import { solarPositiondesc } from "../../constant/solarPositiondesc";
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
  const sunIndex = sunimageselector(sunSet_H, sunRise_H, time);

  const sunRise_Time = `${sunrise[0].split("T")[1]} AM`;
  const sunSet_Time = `${sunset[0].split("T")[1]} PM`;
  return (
    <>
      <Card>
        <CardTitle title="Sunpath" underline={true} />
        <div
          aria-hidden="true"
          id="sun-marker"
          className=" flex flex-row relative 
          border-b-1 pb-small
          min-w-[180px] max-w-[600px] w-full min-h-[100px] mb-small"
        >
          {solarCurve.map(({ Icon, className }, i) => (
            <Icon
              key={`SunIcon-${i}`}
              style={{
                color:
                  i === sunIndex ? "#ce8312" : "var(--color-foreground-mate)",
              }}
              className={className}
            />
          ))}
        </div>
        <div
          className="flex flex-row w-full justify-between"
          aria-hidden="true"
        >
          <p className="text-secondary">{sunRise_Time}</p>
          <p className="text-secondary">{sunSet_Time}</p>
        </div>
        <p className="sr-only">{`Sunrise at ${sunRise_Time} and Sunset at ${sunSet_Time}.`}</p>
        <p className="sr-only">{solarPositiondesc[sunIndex]}</p>
      </Card>
    </>
  );
}
