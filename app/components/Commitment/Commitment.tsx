import { fraunces } from '@/fonts/fonts';
import ArtDirectionImage from '../common/ArtDirectionImage/ArtDirectionImage';

export default function Commitment() {
  return (
    <article className="mb-[120px] flex w-[327px] flex-col gap-[48px] md:mb-[144px] md:w-[689px] md:flex-row md:items-center md:gap-[69px] xl:mb-[168px] xl:w-[1110px] xl:gap-[125px]">
      <ArtDirectionImage
        alt="Man preparing a coffee"
        className="rounded-lg object-cover"
        mobileImg={{
          src: '/commitment_mobile.webp',
          width: 327,
          height: 400,
        }}
        tabletImg={{
          src: '/commitment_tablet.webp',
          width: 281,
          height: 470,
        }}
        desktopImg={{
          src: '/commitment.webp',
          width: 445,
          height: 520,
        }}
      />
      <div className="flex flex-col gap-[30px] text-blueDark md:w-[339px] xl:w-[540px] xl:gap-[32px]">
        <h2
          className={`${fraunces.className} text-center text-[32px] leading-[48px] md:text-left xl:text-[40px]`}
        >
          Our commitment
        </h2>
        <p className="text-center text-[15px] leading-[25px] md:text-left xl:text-[16px] xl:leading-[26px]">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </article>
  );
}
