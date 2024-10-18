import { fraunces } from '@/fonts/fonts';

import PlanButton from '../common/PlanButton';

export default function Hero() {
  return (
    <article className="mb-[120px] flex h-[500px] w-[327px] flex-col items-center rounded-[10px] bg-[url('/hero_mobile.webp')] bg-cover px-[24px] py-[100px] text-cream sm:h-[500px] md:mb-[144px] md:w-[689px] md:items-start md:bg-[url('/hero_tablet.webp')] md:pl-[58px] md:pr-[233px] xl:mb-[136px] xl:h-[600px] xl:w-[1280px] xl:bg-[url('/hero_desktop.webp')] xl:py-[117px] xl:pl-[85px] xl:pr-[702px]">
      <h2
        className={`${fraunces.className} mb-[24px] text-center text-[40px] leading-[40px] md:text-left md:text-[48px] md:leading-[48px] xl:text-[72px] xl:leading-[72px]`}
      >
        Great coffee made simple.
      </h2>
      <p className="mb-[38px] text-center text-[15px] leading-[25px] opacity-80 md:mb-[40px] md:text-left xl:pr-[50px] xl:text-[16px] xl:leading-[26px]">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>

      <PlanButton />
    </article>
  );
}
