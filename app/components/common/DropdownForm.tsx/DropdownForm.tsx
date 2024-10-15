import { fraunces } from '@/fonts/fonts';
import ArrowUp from '@/icons/ArrowIcon';
import { PropsWithChildren } from 'react';

interface DropdownFormProps {
  title: string;
}

export default function DropdownForm({
  title,
  children,
}: PropsWithChildren<DropdownFormProps>) {
  return (
    <div className="flex flex-col gap-[16px] text-greay">
      <div className="mb-[16px] flex items-center justify-between">
        <h2
          className={`${fraunces.className} w-[240px] text-[24px] leading-[28px]`}
        >
          {title}
        </h2>
        <ArrowUp className="cursor-pointer" />
      </div>
      {children}
    </div>
  );
}
