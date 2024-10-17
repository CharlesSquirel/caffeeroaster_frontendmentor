'use client';

import { useFormContext } from 'react-hook-form';
import PlanButton from '../common/PlanButton';
import SummaryDynamicInfo from './SummaryDynamicInfo';

export default function Summary() {
  const { watch } = useFormContext();
  const [how_drink, type, grammage, grind, deliver] = watch([
    'how_drink',
    'type',
    'grammage',
    'grind',
    'deliver',
  ]);
  const isButtonDisabled =
    [how_drink, type, grammage, deliver].some((value) => value === '') &&
    !(how_drink === 'capsule' && grind === '');
  return (
    <>
      <article className="mb-[56px] flex w-[328px] flex-col gap-2 rounded-[10px] bg-chooseBg px-6 py-8 text-white">
        <h3 className="text-base uppercase opacity-50">Order Summary</h3>
        <SummaryDynamicInfo />
      </article>
      <PlanButton mode="submit" disabled={isButtonDisabled} />
    </>
  );
}
