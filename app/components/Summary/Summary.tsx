'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useFormContext } from 'react-hook-form';
import PlanButton from '../common/PlanButton';
import SummaryModal from '../SummaryModal/SummaryModal';
import SummaryDynamicInfo from './SummaryDynamicInfo';

export default function Summary() {
  const [showModal, setShowModal] = useState(false);
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
  const { reset } = useFormContext();
  const handleCloseModal = () => {
    setShowModal(false);
    reset();
  };
  return (
    <>
      <article className="mb-[56px] flex w-[328px] flex-col gap-2 rounded-[10px] bg-chooseBg px-6 py-8 md:mb-[67px] md:w-[689px] md:px-[43px] md:py-[27px] xl:mb-[40px] xl:w-[730px] xl:px-[64px] xl:py-[47px]">
        <h3 className="text-base uppercase text-white opacity-50">
          Order Summary
        </h3>
        <SummaryDynamicInfo mode="form" />
      </article>
      <PlanButton
        mode="submit"
        disabled={isButtonDisabled}
        onClick={() => setShowModal(true)}
      />
      {showModal &&
        createPortal(
          <SummaryModal
            grammage={grammage}
            deliver={deliver}
            onModalClose={handleCloseModal}
          />,
          document.body,
        )}
    </>
  );
}
