import { fraunces } from '@/fonts/fonts';
import auto from '@/icons/auto.svg';
import bean from '@/icons/bean.svg';
import gift from '@/icons/gift.svg';
import ChooseItem from './ChooseItem';

export default function Choose() {
  return (
    <article className="relative mb-[120px] h-[1499px] w-[327px]">
      <div className="aboslute bg-chooseBg right-0 top-0 -z-10 h-[902px] rounded-[10px]"></div>
      <div className="absolute left-2/4 top-[64px] z-10 flex w-[279px] translate-x-[-50%] flex-col gap-[64px]">
        <div className="flex flex-col gap-[24px] text-center text-cream">
          <h2 className={`${fraunces.className} text-[28px] leading-[28px]`}>
            Why choose us?
          </h2>
          <p className="text-[15px] leading-[25px] opacity-80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
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
