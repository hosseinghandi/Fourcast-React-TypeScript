import iconList from "../../constant/iconList";
import { Card, CardTitle } from "../../components";
type props = {
  humidityValue: number[];
};

export default function HumidityCard({ humidityValue }: props) {
  return (
    <Card>
      <CardTitle title="Humidity" Icon={iconList.Humidity} />
      <p>
        {`${humidityValue[0]}`}
        <span aria-hidden="true">%</span>
        <span className="sr-only">Percentage of humidity of the air</span>
      </p>
    </Card>
  );
}
