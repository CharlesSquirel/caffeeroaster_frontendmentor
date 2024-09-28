import { fraunces } from '@/app/fonts/fonts';

import PlanButton from '../common/PlanButton';

export default function Hero() {
  return (
    <article
      className="flex h-[500px] w-[327px] flex-col items-center rounded-[10px] bg-[url('/hero_mobile.jpg')] bg-cover px-[24px] py-[100px] text-cream sm:h-[500px] md:w-[689px] md:items-start md:bg-[url('/hero_tablet.jpg')] md:pl-[58px] md:pr-[233px] lg:bg-[url('/hero_desktop.jpg')] lg:py-[104px]"
      // style={{
      //   backgroundImage: `url('/hero-mobile.jpg')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <h2
        className={`${fraunces.className} mb-[24px] text-center text-[40px] leading-[40px] md:text-left md:text-[48px] md:leading-[48px] lg:text-[72px]`}
      >
        Great coffee made simple.
      </h2>
      <p className="mb-[38px] text-center text-[15px] leading-[25px] opacity-80 md:mb-[40px] md:text-left lg:text-[16px]">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>

      <PlanButton />
    </article>
  );
}
