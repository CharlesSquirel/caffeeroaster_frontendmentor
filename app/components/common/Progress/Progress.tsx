import ProgressCirlce from './ProgressCircle';

export default function Progress() {
  return (
    <div className="relative mb-[48px] hidden h-[31px] w-[497px] items-center justify-center bg-inherit md:flex xl:mb-[67px] xl:w-[790px]">
      <div className="h-[2px] w-[467px] bg-orange xl:w-[760px]"></div>
      <ProgressCirlce position="top-0 left-0" />
      <ProgressCirlce position="top-0 right-0" />
      <ProgressCirlce position="top-0 left-[50%] translate-x-[-50%]" />
    </div>
  );
}
