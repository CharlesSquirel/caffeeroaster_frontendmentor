'use client';

import { fraunces } from '@/fonts/fonts';
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

  return (
    <p className={`${fraunces.className} text-[24px] leading-[40px]`}>
      “I drink my coffee as {how_drink || '...'}, with a{type || '...'} type of
      bean. {grammage || '...'} ground ala
      {grind || '...'} sent to me
      {deliver || '...'}.“
    </p>
  );
}
