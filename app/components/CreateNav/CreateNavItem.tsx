import { fraunces } from '@/fonts/fonts';

interface CreateNavItemProps {
  name: string;
  text: string;
  index: number;
  numberOfElement: number;
  activeLi: string;
  isDisabled: boolean;
}

export default function CreateNavItem({
  name,
  text,
  index,
  numberOfElement,
  activeLi,
  isDisabled,
}: CreateNavItemProps) {
  const isActive = name === activeLi;
  return (
    <li
      className={`${fraunces.className} ${index !== numberOfElement - 1 && 'border-b border-greay pb-[24px]'} ${isActive ? 'opacity-1 border-opacity-40' : 'opacity-40'} ${isDisabled && index === 3 && 'opacity-20'} text-[24px] leading-[32px]`}
    >
      <span
        className={`mr-[28px] ${isActive && 'text-cyan'}`}
      >{`0${index + 1}`}</span>
      {text}
    </li>
  );
}
