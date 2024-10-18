'use client';

import { fraunces } from '@/fonts/fonts';
import useBlurBackground from 'app/utils/hooks/useBackgroundBlur';
import { DeliverEnum, GrammageEnum } from 'app/utils/types/formTypes';
import { useRef } from 'react';
import CheckoutButton from '../CheckoutButton.tsx/CheckoutButton';
import SummaryDynamicInfo from '../Summary/SummaryDynamicInfo';

interface SummaryModalProps {
  deliver: DeliverEnum;
  grammage: GrammageEnum;
  onModalClose: () => void;
}

export default function SummaryModal({
  grammage,
  deliver,
  onModalClose,
}: SummaryModalProps) {
  const modalRef = useRef<HTMLElement>(null);
  useBlurBackground(modalRef);
  return (
    <article
      className="fixed left-[50%] top-[35px] z-[1010] flex w-[327px] translate-x-[-50%] flex-col rounded-[8px] bg-cream"
      ref={modalRef}
    >
      <div className="bg-blueDark py-[28px] pl-[24px]">
        <h2
          className={`${fraunces.className} text-[28px] capitalize leading-[32px] text-cream`}
        >
          Order summary
        </h2>
      </div>
      <div className="flex flex-col bg-cream px-[24px] pb-[24px] pt-[40px]">
        <SummaryDynamicInfo mode="order" />
        <p className="mb-[23px] text-[15px] leading-[25px] text-blueDark opacity-80">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <CheckoutButton
          deliver={deliver}
          grammage={grammage}
          onClick={onModalClose}
        />
      </div>
    </article>
  );
}
