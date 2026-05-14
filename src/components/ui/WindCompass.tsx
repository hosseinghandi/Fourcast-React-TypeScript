import type { WindData } from "../../types/extraction";
type Props = Omit<WindData, "wind_gusts_10m">;

export default function WindCompass({
  wind_direction_10m,
  wind_speed_10m,
}: Props) {
  return (
    <div
      className="relative border-1 rounded-full overflow-hidden size-compass text-compass"
      aria-hidden="true"
    >
      <span className="absolute top-1 left-1/2 -translate-x-1/2 text-muted-foreground">
        N
      </span>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-muted-foreground">
        S
      </span>
      <span className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground">
        E
      </span>
      <span className="absolute left-1 top-1/2 -translate-y-1/2 text-muted-foreground">
        W
      </span>

      <img
        src="/images/arrow.png"
        alt=""
        aria-hidden="true"
        className="absolute h-11/12 w-auto "
        style={{
          transform: `translate(-50%, -50%) rotate(${wind_direction_10m}deg)`,
          left: "50%",
          top: "50%",
        }}
      />
      <div
        className="size-4/11 absolute left-1/2 top-1/2 -translate-x-1/2 
        -translate-y-1/2 rounded-full bg-black border-1 border-black dark:border-foreground
        text-white flex justify-center items-center"
      >
        <span className="text-center h-fit max-lg:text-[10px] text-secondary">
          {wind_speed_10m} m/s
        </span>
      </div>
    </div>
  );
}
