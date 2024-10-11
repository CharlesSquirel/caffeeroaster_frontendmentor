interface ProgressCircleProps {
  position: string;
}

export default function ProgressCirlce({ position }: ProgressCircleProps) {
  return (
    <div
      className={`${position} absolute h-[31px] w-[31px] rounded-full border-2 border-cyan bg-inherit`}
    ></div>
  );
}
