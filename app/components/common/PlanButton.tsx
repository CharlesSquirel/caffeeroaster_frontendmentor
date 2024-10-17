import { fraunces } from '@/fonts/fonts';
import Link from 'next/link';

interface PlanButtonProps {
  mode?: 'link' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export default function PlanButton({
  mode,
  disabled,
  onClick,
}: PlanButtonProps) {
  const commonClasses = `${fraunces.className} h-[56px] w-[217px] rounded-md bg-cyan px-[31px] py-[13px] text-[18px] font-black leading-[25px] text-cream hover:bg-btnHover`;

  if (mode === 'submit') {
    return (
      <button
        className={`${commonClasses} ${disabled && 'pointer-events-none bg-disabledBtn'}`}
        type="submit"
        disabled={disabled}
        onClick={onClick}
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
