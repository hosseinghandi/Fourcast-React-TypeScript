import Card from "../shared/Card";

type Props = {
  message?: string;
};

export default function ErrorScreen({ message }: Props) {
  return (
    <>
      <Card>
        <h1>{message}</h1>
      </Card>
    </>
  );
}
