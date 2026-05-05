type props = {
  rainValue: number[];
};
export default function RainCard({ rainValue }: props) {
  return (
    <>
      <h1>RAINCARD</h1>
      <h1>{rainValue[0]}</h1>
    </>
  );
}
