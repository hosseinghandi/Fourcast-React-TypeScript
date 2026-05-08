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
        <div className="flex flex-row items-baseline ">
          <p className="w-4/11 font-bold text-primary">{uvValue[0]}</p>
          <Gauge value={uvValue[0]} variant={"uv"} />
        </div>
      </Card>
    </>
  );
}

// uvIndexEl.innerHTML = `<strong class="detail-value">${daily.uv_index_max[0]}</strong>`;
// uvIndicator.style.left = `${daily.uv_index_max[0] * 10}%`;
