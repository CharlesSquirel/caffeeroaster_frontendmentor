import { fraunces } from '@/fonts/fonts';

export default function HeroPlan() {
  return (
    <article className="mb-[120px] flex w-[327px] flex-col items-center gap-[22px] rounded-[10px] bg-[url('/hero_plan_mobile.webp')] bg-cover px-[24px] pb-[136px] pt-[101px] text-cream">
      <h2 className={`${fraunces.className}`}>Create a plan</h2>
      <p>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </article>
  );
}
