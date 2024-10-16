'use client';
import { fraunces } from '@/fonts/fonts';

interface DropdownOptionProps {
  title: string;
  description: string;
  name: string;
  handleOnClick?: (name: string) => void;
  //   onClick:
}

export default function DropdownOption({
  title,
  description,
  name,
  handleOnClick,
}: DropdownOptionProps) {
  if (!handleOnClick) return null;
  // console.log('handleOnClick:', handleOnClick);
  // console.log('name:', name);
  // const { activeDropdown } = useDropdown();

  // const context = useContext(DropdownOptionContext);
  return (
    <div
      className="flex w-[328px] cursor-pointer flex-col gap-[8px] rounded-[8px] bg-dropdownOptionBg p-[24px] text-blueDark hover:bg-orange"
      onClick={() => handleOnClick(name)}
    >
      <h3 className={`${fraunces.className} text-[24px] leading-[32px]`}>
        {title}
      </h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
