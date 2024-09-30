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
    <div className="mb-[48px] flex flex-col items-center gap-[24px]">
      <Image src={imageUrl} alt="" width={200} height={151} />
      <div className="flex flex-col gap-[16px] text-blueDark">
        <h3
          className={`${fraunces.className} text-center text-[24px] font-black leading-[32px]`}
        >
          {title}
        </h3>
        <p className="text-center text-[15px] leading-[25px]">{description}</p>
      </div>
    </div>
  );
}
