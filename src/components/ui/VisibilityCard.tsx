type props = {
  visibilityValue: number[];
};
export default function VisibilityCard({ visibilityValue }: props) {
  return (
    <>
      <h1>VISIBILITY</h1>
      <h1>{visibilityValue[0]}</h1>
    </>
  );
}
