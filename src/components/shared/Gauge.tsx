type GaugeProps = {
  value: number;
  variant: "rain" | "uv";
};

export default function Gauge({ value, variant }: GaugeProps) {
  const max = variant === "rain" ? 100 : 10;
  const percent = (value / max) * 100;

  const gradients = {
    rain: "linear-gradient(to right, #440154, #3b528b, #21908d, #5ec962, #fde725)",
    uv: "linear-gradient(to right, green, yellow, rgb(248,162,48), red, rgb(149,2,247))",
  };

  return (
    <div
      aria-hidden="true"
      className="relative h-[2px] w-full rounded-full"
      style={{ background: gradients[variant] }}
    >
      <span
        className="absolute top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-muted bg-white"
        style={{ left: `${Math.min(percent, 100)}%` }}
      />
    </div>
  );
}
