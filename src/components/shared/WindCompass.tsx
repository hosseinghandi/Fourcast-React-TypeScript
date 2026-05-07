type Props = {
  angleDeg: number;
};

export default function WindCompass({ angleDeg }: Props) {
  return (
    <div className="relative border rounded-full overflow-hidden size-compass">
      <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground">
        N
      </span>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground">
        S
      </span>
      <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] text-muted-foreground">
        E
      </span>
      <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] text-muted-foreground">
        W
      </span>

      <img
        src="/images/arrow.png"
        alt=""
        aria-hidden="true"
        className="absolute h-11/12 w-auto z-50"
        style={{
          transform: `translate(-50%, -50%) rotate(${angleDeg}deg)`,
          left: "50%",
          top: "50%",
        }}
      />
      <span className="size-2/11 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm border-1 border-foreground-mute" />
    </div>
  );
}
