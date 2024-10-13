import { fraunces } from '@/fonts/fonts';
import { headquarters } from 'app/data/headquarters';
import HeadquartersItem from './HeadquartersItem';

export default function Headquarters() {
  return (
    <article className="mb-[120px] flex w-[327px] flex-col items-center gap-[72px] md:mb-[144px] md:w-[688px] md:items-start xl:mb-[168px] xl:w-[1045px]">
      <h2
        className={`${fraunces.className} text-[24px] leading-[32px] text-greay`}
      >
        Our headquarters
      </h2>
      <div className="flex flex-col gap-[80px] md:flex-row md:gap-[10px] xl:gap-[95px]">
        {headquarters.map((headquarters, index) => (
          <HeadquartersItem
            key={index}
            address={headquarters.address}
            imgUrl={headquarters.imgUrl}
            imgAlt={headquarters.imgAlt}
            title={headquarters.title}
          />
        ))}
      </div>
    </article>
  );
}
