'use client';
import { fraunces } from '@/fonts/fonts';
import { useFormContext } from 'react-hook-form';

interface DropdownOptionProps {
  title: string;
  description: string;
  name: string;
  value: string;
  handleOnClick?: (name: string) => void;
  activeDropdown?: string;
}

export default function DropdownOption({
  title,
  description,
  activeDropdown,
  handleOnClick,
  value,
  name,
}: DropdownOptionProps) {
  const { setValue } = useFormContext();
  if (!handleOnClick) return null;
  const handleOnRegister = () => {
    setValue(name, value);
  };

  return (
    <div
      className={`${activeDropdown === value ? 'pointer-events-none bg-cyan text-white' : 'bg-dropdownOptionBg hover:bg-orange'} flex w-[328px] cursor-pointer flex-col gap-[8px] rounded-[8px] p-[24px] text-blueDark`}
      onClick={() => {
        handleOnClick(value);
        handleOnRegister();
      }}
    >
      <h3 className={`${fraunces.className} text-[24px] leading-[32px]`}>
        {title}
      </h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
