type Props = {
  message?: string;
};

export default function ErrorScreen({ message }: Props) {
  return <h1>ErrorScreen: {message}</h1>;
}