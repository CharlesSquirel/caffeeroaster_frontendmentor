'use client';
import { fraunces } from '@/fonts/fonts';

interface DropdownOptionProps {
  title: string;
  description: string;
  name: string;
  handleOnClick?: (name: string) => void;
  activeDropdown?: string;
  value: string;
  //   onClick:
}

export default function DropdownOption({
  title,
  description,
  activeDropdown,
  handleOnClick,
  value,
}: DropdownOptionProps) {
  if (!handleOnClick) return null;
  const isActive = activeDropdown === value;

  return (
    <div
      className={`${activeDropdown === value ? 'pointer-events-none bg-cyan text-white' : 'bg-dropdownOptionBg hover:bg-orange'} flex w-[328px] cursor-pointer flex-col gap-[8px] rounded-[8px] p-[24px] text-blueDark`}
      onClick={() => handleOnClick(value)}
    >
      <h3 className={`${fraunces.className} text-[24px] leading-[32px]`}>
        {title}
      </h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
