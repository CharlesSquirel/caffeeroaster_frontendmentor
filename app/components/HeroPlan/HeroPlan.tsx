import { fraunces } from '@/fonts/fonts';

export default function HeroPlan() {
  return (
    <article className="mb-[120px] flex w-[327px] flex-col items-center gap-[22px] rounded-[10px] bg-[url('/hero_plan_mobile.webp')] bg-cover px-[24px] pb-[136px] pt-[101px] text-cream md:mb-[144px] md:w-[689px] md:items-start md:bg-[url('/hero_plan_tablet.webp')] md:py-[126px] md:pl-[58px] md:pr-[233px] xl:mb-[168px] xl:w-[1280px] xl:gap-[32px] xl:bg-[url('/hero_plan_desktop.webp')] xl:py-[134px] xl:pl-[85px] xl:pr-[709px]">
      <h2
        className={`${fraunces.className} leading:-[40px] text-[40px] xl:text-7xl xl:leading-[72px]`}
      >
        Create a plan
      </h2>
      <p className="text-center text-[15px] leading-[25px] opacity-80 md:text-start xl:text-base">
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </article>
  );
}
