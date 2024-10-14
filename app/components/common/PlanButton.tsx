import { fraunces } from '@/fonts/fonts';
import Link from 'next/link';

export default function PlanButton() {
  return (
    <Link
      className={`${fraunces.className} h-[56px] w-[217px] rounded-md bg-cyan px-[31px] py-[13px] text-[18px] font-black leading-[25px] text-cream hover:bg-btnHover`}
      href="/plan"
    >
      Create your plan
    </Link>
  );
}
