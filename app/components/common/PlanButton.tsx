import { fraunces } from '@/fonts/fonts';
import Link from 'next/link';

interface PlanButtonProps {
  mode?: 'link' | 'submit';
  disabled?: boolean;
}

export default function PlanButton({ mode, disabled }: PlanButtonProps) {
  const commonClasses = `${fraunces.className} h-[56px] w-[217px] rounded-md bg-cyan px-[31px] py-[13px] text-[18px] font-black leading-[25px] text-cream hover:bg-btnHover`;

  if (mode === 'submit') {
    return (
      <button
        className={`${commonClasses} ${disabled && 'bg-disabledBtn pointer-events-none'}`}
        type="submit"
        disabled={disabled}
      >
        Create my plan!
      </button>
    );
  }
  return (
    <Link className={commonClasses} href="/plan">
      Create your plan
    </Link>
  );
}
