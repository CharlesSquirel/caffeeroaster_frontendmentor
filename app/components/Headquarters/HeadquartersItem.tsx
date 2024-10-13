import { fraunces } from '@/fonts/fonts';
import Image from 'next/image';

interface HeadquartersItemProps {
  title: string;
  imgUrl: string;
  address: string;
  imgAlt: string;
}

export default function HeadquartersItem({
  title,
  imgUrl,
  address,
  imgAlt,
}: HeadquartersItemProps) {
  return (
    <div className="flex flex-col items-center text-center text-blueDark md:w-[223px] md:items-start md:text-left xl:w-[285px]">
      <Image src={imgUrl} alt={imgAlt} className="mb-[48px] xl:mb-[46px]" />
      <h3
        className={`${fraunces.className} mb-[22px] text-[28px] leading-[36px] md:text-[24px] xl:mb-[24px] xl:text-[32px]`}
      >
        {title}
      </h3>
      <p className="w-[115px] text-[16px] leading-[26px] md:w-[163px] xl:w-[151px]">
        {address}
      </p>
    </div>
  );
}
