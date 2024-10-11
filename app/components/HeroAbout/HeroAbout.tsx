import { fraunces } from '@/fonts/fonts';

export default function HeroAbout() {
  return (
    <article className="mb-[120px] flex h-[400px] w-[327px] flex-col gap-[24px] rounded-[10px] bg-[url('/hero_about_mobile.jpg')] bg-cover px-[24px] pb-[87px] pt-[111px] text-cream md:mb-[144px] md:h-[400px] md:w-[689px] md:bg-[url('/hero_about_tablet.jpg')] md:py-[118px] md:pl-[58px] md:pr-[233px] xl:mb-[168px] xl:h-[450px] xl:w-[1280px] xl:bg-[url('/hero_about_desktop.jpg')] xl:py-[137px] xl:pl-[87px] xl:pr-[750px]">
      <h2
        className={`${fraunces.className} text-center text-[28px] font-bold leading-[28px] md:text-left md:text-[32px] md:leading-[40px] xl:text-[40px] xl:leading-[48px]`}
      >
        About us
      </h2>
      <p className="text-center text-[15px] font-normal leading-[25px] opacity-80 md:text-left xl:text-[16px] xl:leading-[26px]">
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </article>
  );
}
