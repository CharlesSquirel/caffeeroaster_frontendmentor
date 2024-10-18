'use client';

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CreateNavItem from './CreateNavItem';

interface createNavListType {
  text: string;
  name: string;
}

const creatNavList: createNavListType[] = [
  {
    text: 'Preferences',
    name: 'how_drink',
  },
  {
    text: 'Bean Type',
    name: 'type',
  },
  {
    text: 'Quantity',
    name: 'grammage',
  },
  {
    text: 'Grind Option',
    name: 'grind',
  },
  {
    text: 'Deliveries',
    name: 'deliver',
  },
];

export default function CreateNav() {
  const [activeLi, setActiveLi] = useState('how_drink');

  const { watch } = useFormContext();
  const [how_drink, type, grammage, grind, deliver] = watch([
    'how_drink',
    'type',
    'grammage',
    'grind',
    'deliver',
  ]);

  useEffect(() => {
    const findActiveLiName = () => {
      const values = [how_drink, type, grammage, grind, deliver];
      const lastIndex = values.findLastIndex((value) => value !== '');
      if (lastIndex !== -1) {
        setActiveLi(creatNavList[lastIndex].name);
      }
    };

    findActiveLiName();
  }, [how_drink, type, grammage, grind, deliver]);

  return (
    <nav className="hidden w-[255px] xl:block">
      <ul className="flex flex-col gap-[49px]">
        {creatNavList.map((list, index) => (
          <CreateNavItem
            key={index}
            text={list.text}
            name={list.name}
            numberOfElement={creatNavList.length}
            index={index}
            activeLi={activeLi}
            isDisabled={how_drink === 'capsule'}
          />
        ))}
      </ul>
    </nav>
  );
}
