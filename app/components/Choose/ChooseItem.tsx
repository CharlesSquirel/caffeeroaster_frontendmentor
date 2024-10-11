import { fraunces } from '@/fonts/fonts';
import Image from 'next/image';

interface ChooseItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ChooseItem({
  title,
  description,
  imageUrl,
}: ChooseItemProps) {
  return (
    <div className="flex h-[382px] w-[279px] flex-col items-center rounded-[8px] bg-cyan px-[12px] pb-[51px] pt-[72px] text-cream md:h-[180px] md:w-[573px] md:flex-row md:gap-[55px] md:py-[41px] md:pl-[70px] md:pr-[48px] xl:h-[382px] xl:w-[350px] xl:flex-col xl:px-[48px] xl:pb-[48px] xl:pt-[72px]">
      <Image
        src={imageUrl}
        alt=""
        className="mb-[56px] h-[72px] w-[72px] items-center md:mb-0 md:h-[56px] md:w-[56px] xl:h-[72px] xl:w-[72px]"
      />
      <div className="flex flex-col gap-[24px] md:gap-[16px] xl:flex-col xl:gap-[24px]">
        <h3
          className={`${fraunces.className} text-center text-[24px] leading-[32px] md:text-left xl:text-center`}
        >
          {title}
        </h3>
        <p className="max-w-[212px] text-center text-[15px] leading-[25px] md:max-w-none md:text-left xl:text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
