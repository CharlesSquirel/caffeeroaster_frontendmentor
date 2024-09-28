import { fraunces } from '@/app/fonts/fonts';

export default function PlanButton() {
  return (
    <a
      className={`${fraunces.className} h-[56px] w-[217px] rounded-md bg-cyan px-[31px] py-[13px] text-lg font-black text-cream hover:bg-btnHover`}
      href="#"
    >
      Create your plan
    </a>
  );
}
