import Card from "../shared/Card";

type Props = {
  message?: Error | null;
};

export default function ErrorScreen({ message }: Props) {
  return (
    <>
      <Card>
        <h1>{message?.message}</h1>
      </Card>
    </>
  );
}
