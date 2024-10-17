'use client';

import { fraunces } from '@/fonts/fonts';
import { mapDrink, mapDrinkPrefix } from 'app/utils/switch/mappers';
import { useFormContext } from 'react-hook-form';

export default function SummaryDynamicInfo() {
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
    <p className={`${fraunces.className} text-[24px] leading-[40px]`}>
      “I drink my coffee {mappedDrinkPrefix}
      <span className="text-cyan">{mappedDrink}</span>, with a
      <span className="capitalize text-cyan">{type ? ` ${type} ` : ' ? '}</span>
      type of bean.
      <span className="text-cyan">{grammage ? ` ${grammage}g ` : ' ? '}</span>
      ground ala
      <span className="capitalize text-cyan">
        {grind ? ` ${grind} ` : ' ? '}
      </span>
      sent to me
      <span className="capitalize text-cyan">
        {deliver ? ` Every ${deliver}` : ' ? '}
      </span>
      .“
    </p>
  );
}
