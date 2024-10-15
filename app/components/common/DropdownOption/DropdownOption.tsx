import { fraunces } from '@/fonts/fonts';

interface DropdownOptionProps {
  title: string;
  description: string;
  //   name: string;
  //   onClick:
}

export default function DropdownOption({
  title,
  description,
}: DropdownOptionProps) {
  return (
    <div className="bg-dropdownOptionBg flex w-[328px] flex-col gap-[8px] rounded-[8px] p-[24px] text-blueDark">
      <h3 className={`${fraunces.className} text-[24px] leading-[32px]`}>
        {title}
      </h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
