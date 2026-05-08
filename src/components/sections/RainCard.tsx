import iconList from "../../constant/iconList";
import { Card, Gauge, CardTitle } from "..";
type props = {
  rainValue: number[];
};
export default function RainCard({ rainValue }: props) {
  return (
    <Card>
      <CardTitle title="Rain chance" Icon={iconList.Rain} />
      <div className="flex flex-row items-baseline ">
        <h3
          aria-label="Current rain chance"
          className="w-2/12 font-bold text-primaryss"
        >
          {`${rainValue[0]}`}
          <span aria-hidden="true">%</span>
          <span className="sr-only">Percentage change of rain</span>
        </h3>
        <Gauge value={rainValue[0]} variant={"rain"} />
      </div>
    </Card>
  );
}
