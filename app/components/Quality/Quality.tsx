import { fraunces } from '@/fonts/fonts';
import ArtDirectionImage from '../common/ArtDirectionImage/ArtDirectionImage';

export default function Quality() {
  return (
    <article className="relative mb-[120px] flex h-[587px] w-[327px] flex-col items-center md:mb-[144px] md:h-[648px] md:w-[688px] xl:mb-[168px] xl:h-[562px] xl:w-[1280px] xl:flex-row-reverse xl:gap-[148px] xl:px-[85px]">
      <ArtDirectionImage
        alt="Cup of a caffee"
        className="mb-[64px] rounded-lg object-cover object-bottom xl:object-center"
        mobileImg={{
          src: '/quality_mobile.webp',
          width: 279,
          height: 156,
        }}
        tabletImg={{
          src: '/quality_tablet.webp',
          width: 573,
          height: 320,
        }}
        desktopImg={{
          src: '/quality.webp',
          width: 445,
          height: 474,
        }}
      />
      <div className="flex flex-col gap-[24px] px-[24px] text-center text-cream md:px-[74px] xl:w-[540px] xl:gap-[32px] xl:px-0 xl:text-left">
        <h2
          className={`${fraunces.className} text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] xl:text-[40px]`}
        >
          Uncompromising quality
        </h2>
        <p className="text-[15px] leading-[25px] opacity-80 xl:text-[16px] xl:leading-[26px]">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 h-[509px] w-[327px] rounded-lg bg-chooseBg md:w-[688px] xl:h-[474px] xl:w-[1280px]"></div>
    </article>
  );
}
