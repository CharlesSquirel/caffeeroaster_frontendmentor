import { fraunces } from '@/fonts/fonts';
import auto from '@/icons/auto.svg';
import bean from '@/icons/bean.svg';
import gift from '@/icons/gift.svg';
import ChooseItem from './ChooseItem';

export default function Choose() {
  return (
    <article className="relative mb-[120px] h-[1499px] w-[327px] md:mb-[144px] md:h-[863px] md:w-[688px] xl:h-[728px] xl:w-[1280px]">
      <div className="aboslute right-0 top-0 -z-10 h-[902px] rounded-[10px] bg-chooseBg md:h-[573px] xl:h-[577px] xl:w-[1280px]"></div>
      <div className="absolute left-2/4 top-[64px] z-10 flex w-[279px] translate-x-[-50%] flex-col gap-[64px] md:top-[56px] md:w-[540px] xl:w-[1110px] xl:gap-[86px]">
        <div className="flex flex-col gap-[24px] text-center text-cream xl:gap-[32px]">
          <h2
            className={`${fraunces.className} text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] xl:text-[40px]`}
          >
            Why choose us?
          </h2>
          <p className="text-[15px] leading-[25px] opacity-80 md:pr-[1px] xl:px-[290px] xl:text-[16px] xl:leading-[28px]">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="flex flex-col gap-[24px] xl:flex-row xl:gap-[30px]">
          <ChooseItem
            title="Best quality"
            description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
            imageUrl={bean}
          />
          <ChooseItem
            title="Exclusive benefits"
            description="Special offers and swag when you subscribe, including 30% off your first shipment."
            imageUrl={gift}
          />
          <ChooseItem
            title="Free shiping"
            description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
            imageUrl={auto}
          />
        </div>
      </div>
    </article>
  );
}
