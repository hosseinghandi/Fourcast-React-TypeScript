import iconList from "../../constant/iconList";
import { Card, Gauge, CardTitle } from "../../components";

type props = {
  uvValue: number[];
};

export default function UVCard({ uvValue }: props) {
  return (
    <>
      <Card>
        <CardTitle title="UV value" Icon={iconList.UV} />
        <p>{uvValue[0]}</p>
        <Gauge value={uvValue[0]} variant={"uv"} />
      </Card>
      <h1>{uvValue[0]}</h1>
    </>
  );
}

// uvIndexEl.innerHTML = `<strong class="detail-value">${daily.uv_index_max[0]}</strong>`;
// uvIndicator.style.left = `${daily.uv_index_max[0] * 10}%`;
