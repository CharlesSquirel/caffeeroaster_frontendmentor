'use client';

import { fraunces } from '@/fonts/fonts';
import ArrowUp from '@/icons/ArrowIcon';
import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';

interface DropdownFormProps {
  title: string;
  index: number;
}

export default function DropdownForm({
  title,
  children,
  index,
}: PropsWithChildren<DropdownFormProps>) {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [isDropdownActive, setIsDropdownActive] = useState(
    index === 0 ? true : false,
  );

  const { watch, setValue } = useFormContext();
  const [how_drink] = watch(['how_drink']);

  const handleOnClick = (value: string): void => {
    setActiveDropdown(value);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const clonedChild = React.cloneElement(child as ReactElement<any>, {
        handleOnClick: handleOnClick,
        activeDropdown: activeDropdown,
      });
      return clonedChild;
    }
    return child;
  });

  const isDisabled = how_drink === 'capsule' && index === 3;

  useEffect(() => {
    if (how_drink === 'capsule' && index === 3) {
      setIsDropdownActive(false);
      setValue('grind', '');
      setActiveDropdown('');
    }
  }, [how_drink, index, setValue]);

  return (
    <div
      className={`${isDisabled && 'opacity-50'} flex w-[328px] flex-col gap-[16px] text-greay md:w-[689px] xl:w-[730px]`}
    >
      <div className="mb-[16px] flex items-center justify-between">
        <h2
          className={`${fraunces.className} w-[240px] text-[24px] leading-[28px] md:w-auto md:text-[32px] md:leading-[48px] xl:text-[40px] xl:leading-[38px]`}
        >
          {title}
        </h2>
        <ArrowUp
          className={`${isDropdownActive && 'rotate-180'} ${isDisabled && 'pointer-events-none'} cursor-pointer`}
          onClick={() => {
            setIsDropdownActive(!isDropdownActive);
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-[16px] md:flex-row md:gap-[8px] xl:gap-[23px]">
        {isDropdownActive && childrenWithProps}
      </div>
    </div>
  );
}
