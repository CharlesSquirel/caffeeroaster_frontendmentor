'use client';

import { fraunces } from '@/fonts/fonts';
import ArrowUp from '@/icons/ArrowIcon';
import React, { PropsWithChildren, ReactElement, useState } from 'react';

interface DropdownFormProps {
  title: string;
  index: number;
}

export default function DropdownForm({
  title,
  children,
  index,
}: PropsWithChildren<DropdownFormProps>) {
  const [isDropdownActive, setIsDropdownActive] = useState(
    index === 0 ? true : false,
  );
  const [activeDropdown, setActiveDropdown] = useState('');
  const handleOnClick = (name: string): void => {
    console.log('Wywoluje sie' + name);
    // setActiveDropdown(name); // Możesz zobaczyć, co się dzieje w konsoli
  };
  console.log('activeDropdown:', activeDropdown);
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // console.log('Original child:', child); // Debugowanie
      const clonedChild = React.cloneElement(child as ReactElement<any>, {
        handleOnClick: handleOnClick,
      });
      // console.log('Cloned child:', clonedChild); // Debugowanie
      return clonedChild;
    }
    return child;
  });

  return (
    <div className="flex flex-col gap-[16px] text-greay">
      <div className="mb-[16px] flex items-center justify-between">
        <h2
          className={`${fraunces.className} w-[240px] text-[24px] leading-[28px]`}
        >
          {title}
        </h2>
        <ArrowUp
          className={`${isDropdownActive && 'rotate-180'} cursor-pointer`}
          onClick={() => setIsDropdownActive(!isDropdownActive)}
        />
      </div>
      {isDropdownActive && childrenWithProps}
    </div>
  );
}
