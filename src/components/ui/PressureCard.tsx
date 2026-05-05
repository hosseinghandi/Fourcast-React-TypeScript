type props = {
  pressureValue: number[];
};
export default function PressureCard({ pressureValue }: props) {
  return <h1>{pressureValue[0]}</h1>;
}
