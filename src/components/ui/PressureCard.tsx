import iconList from "../../constant/iconList";
import { Card, CardTitle } from "../../components";
type props = {
  pressureValue: number[];
};
export default function PressureCard({ pressureValue }: props) {
  return (
    <Card>
      <CardTitle title="Air Pressure" Icon={iconList.Pressure} />
      <p>
        {`${pressureValue[0]}`}
        <span aria-hidden="true"> hPa</span>
        <span className="sr-only"> hectopascals</span>
      </p>
    </Card>
  );
}
