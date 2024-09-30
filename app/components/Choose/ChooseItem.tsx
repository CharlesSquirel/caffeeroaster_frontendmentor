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
    <div className="flex h-[382px] w-[279px] flex-col items-center rounded-[8px] bg-cyan px-[12px] pb-[51px] pt-[72px] text-cream">
      <Image src={imageUrl} alt="" className="mb-[56px] h-[72px] w-[72px]" />
      <h3
        className={`${fraunces.className} mb-[24px] text-center text-[24px] leading-[32px]`}
      >
        {title}
      </h3>
      <p className="max-w-[212px] text-center text-[15px] leading-[25px]">
        {description}
      </p>
    </div>
  );
}
