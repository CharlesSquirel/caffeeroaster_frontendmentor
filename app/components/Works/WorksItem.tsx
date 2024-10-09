import { fraunces } from '@/fonts/fonts';

interface WorksItemProps {
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}

export default function WorksItem({
  number,
  title,
  description,
  isLast,
}: WorksItemProps) {
  return (
    <div
      className={`${isLast ? 'mb-[79px]' : 'mb-[56px]'} flex w-[327px] flex-col gap-[24px]`}
    >
      <p
        className={`${fraunces.className} text-center text-[72px] font-bold text-orange`}
      >{`0${number}`}</p>
      <h3
        className={`${fraunces.className} text-center text-[28px] leading-[32px] text-blueDark`}
      >
        {title}
      </h3>
      <p className="text-center text-[15px] leading-[25px] text-blueDark">
        {description}
      </p>
    </div>
  );
}
