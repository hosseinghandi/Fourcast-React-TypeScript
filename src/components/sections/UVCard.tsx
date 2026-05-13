import iconList from "../../constant/iconList";
import { Card, Gauge, CardTitle } from "..";

type props = {
  uvValue: number[];
};

export default function UVCard({ uvValue }: props) {
  return (
    <>
      <Card>
        <CardTitle title="UV value" Icon={iconList.UV} />
        <div className="flex flex-row items-baseline">
          <p className="w-4/11 font-bold text-primary" aria-hidden="true">
            {uvValue[0]}
          </p>
          <span className="sr-only">UV index: {uvValue[0]}</span>
          <Gauge value={uvValue[0]} variant={"uv"} />
        </div>
      </Card>
    </>
  );
}
