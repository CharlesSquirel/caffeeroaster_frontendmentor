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
      className={`${isLast ? 'mb-[79px] md:mb-0' : 'mb-[56px] md:mb-0 md:mr-[10px] xl:mr-[95px]'} flex w-[327px] flex-col gap-[24px] md:w-[223px] md:gap-[40px] xl:w-[285px]`}
    >
      <p
        className={`${fraunces.className} text-center text-[72px] font-bold text-orange md:text-left`}
      >{`0${number}`}</p>
      <h3
        className={`${fraunces.className} text-center text-[28px] leading-[32px] md:text-left`}
      >
        {title}
      </h3>
      <p className="text-center text-[15px] leading-[25px] md:text-start xl:text-[16px] xl:leading-[26px]">
        {description}
      </p>
    </div>
  );
}
