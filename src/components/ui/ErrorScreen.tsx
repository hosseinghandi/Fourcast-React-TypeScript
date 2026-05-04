type Props = {
  message?: Error | null;
};

export default function ErrorScreen({ message }: Props) {
  return <h1>ErrorScreen: {message?.message}</h1>;
}
