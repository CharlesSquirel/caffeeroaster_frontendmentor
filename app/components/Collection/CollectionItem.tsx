import { fraunces } from '@/fonts/fonts';
import Image from 'next/image';

interface CollectionItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function CollectionItem({
  title,
  description,
  imageUrl,
}: CollectionItemProps) {
  return (
    <div className="mb-[48px] flex flex-col items-center gap-[24px] md:mb-[32px] md:flex-row md:gap-[36px] md:pl-[60px] xl:mb-0 xl:flex-col xl:gap-[72px] xl:pl-0">
      <Image
        src={imageUrl}
        alt=""
        className="height-[151] w-[200] md:h-[193px] md:w-[255px]"
      />
      <div className="flex flex-col gap-[16px] text-blueDark md:gap-[24px] md:pr-[75px] xl:pr-0">
        <h3
          className={`${fraunces.className} text-center text-[24px] font-black leading-[32px] md:text-left xl:text-center`}
        >
          {title}
        </h3>
        <p className="text-center text-[15px] leading-[25px] md:text-left xl:text-center xl:text-[16px] xl:leading-[26px]">
          {description}
        </p>
      </div>
    </div>
  );
}
