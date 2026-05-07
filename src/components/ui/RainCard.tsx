import iconList from "../../constant/iconList";
import { Card, Gauge, CardTitle } from "../../components";
type props = {
  rainValue: number[];
};
export default function RainCard({ rainValue }: props) {
  return (
    <Card>
      <CardTitle title="Rain chance" Icon={iconList.Rain} />
      <h3 aria-label="Current rain chance">
        {`${rainValue[0]}`}
        <span aria-hidden="true">%</span>
        <span className="sr-only">Percentage change of rain</span>
        <Gauge value={rainValue[0]} variant={"rain"} />
      </h3>
    </Card>
  );
}
