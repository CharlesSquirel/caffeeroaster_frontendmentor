'use client';

import { fraunces } from '@/fonts/fonts';
import { mapDrink, mapDrinkPrefix } from 'app/utils/switch/mappers';
import { useFormContext } from 'react-hook-form';

export const blankedSeparator = ' _____ ';

interface SummaryDynamicInfoProps {
  mode: 'form' | 'order';
}

export default function SummaryDynamicInfo({ mode }: SummaryDynamicInfoProps) {
  const { watch } = useFormContext();
  const [how_drink, type, grammage, grind, deliver] = watch([
    'how_drink',
    'type',
    'grammage',
    'grind',
    'deliver',
  ]);

  const mappedDrink = mapDrink(how_drink);
  const mappedDrinkPrefix = mapDrinkPrefix(how_drink);

  return (
    <p
      className={`${fraunces.className} ${mode === 'form' ? 'text-white' : 'text-greay'} text-[24px] leading-[40px]`}
    >
      “I drink my coffee {mappedDrinkPrefix}
      <span className="text-cyan">{mappedDrink}</span>, with a
      <span className="capitalize text-cyan">
        {type ? ` ${type} ` : blankedSeparator}
      </span>
      type of bean.
      <span className="text-cyan">
        {grammage ? ` ${grammage}g ` : blankedSeparator}
      </span>
      ground ala
      <span className="capitalize text-cyan">
        {grind ? ` ${grind} ` : blankedSeparator}
      </span>
      sent to me
      <span className="capitalize text-cyan">
        {deliver ? ` Every ${deliver}` : blankedSeparator}
      </span>
      .“
    </p>
  );
}
