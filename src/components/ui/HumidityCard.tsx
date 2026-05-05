type props = {
  humidityValue: number[];
};

export default function HumidityCard({ humidityValue }: props) {
  return <h1>{humidityValue[0]}</h1>;
}
