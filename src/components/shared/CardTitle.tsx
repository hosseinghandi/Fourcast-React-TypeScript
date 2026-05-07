import type React from "react";

type Props = {
  title: string;
  Icon?: React.ElementType;
  underline?: boolean;
};
export default function CardTitle({ title, Icon, underline }: Props) {
  return (
    <div className="flex flex-row gap-tight items-center">
      {!!Icon && <Icon aria-hidden="true" />}
      <h2
        style={{ textDecoration: underline ? "underline" : "" }}
        id="hourly_forcast"
        className="text-secondary "
        aria-label={`${title}`}
      >
        {title}
      </h2>
    </div>
  );
}
