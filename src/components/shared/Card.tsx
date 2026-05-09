import type React from "react";
type Props = React.ComponentPropsWithRef<"div"> & {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "", ...rest }: Props) {
  return (
    <div
      {...rest}
      className="p-small border-1 w-full h-full rounded-radius
      backdrop-blur-md"
    >
      {children}
    </div>
  );
}
