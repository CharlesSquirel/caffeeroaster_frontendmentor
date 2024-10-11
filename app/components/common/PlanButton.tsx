import { fraunces } from '@/fonts/fonts';

export default function PlanButton() {
  return (
    <a
      className={`${fraunces.className} h-[56px] w-[217px] rounded-md bg-cyan px-[31px] py-[13px] text-[18px] font-black leading-[25px] text-cream hover:bg-btnHover`}
      href="#"
    >
      Create your plan
    </a>
  );
}
