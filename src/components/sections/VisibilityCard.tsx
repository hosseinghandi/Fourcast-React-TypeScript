import iconList from "../../constant/iconList";
import { Card, CardTitle } from "..";
type props = {
  visibilityValue: number[];
};
export default function VisibilityCard({ visibilityValue }: props) {
  return (
    <Card>
      <CardTitle title="Visibility" Icon={iconList.Visibility} />
      <p className="font-bold text-primary">
        {`${(visibilityValue[0] / 1000).toFixed(0)}`}
        <span aria-hidden="true"> Km</span>
        <span className="sr-only">Kilometres visibility</span>
      </p>
    </Card>
  );
}
