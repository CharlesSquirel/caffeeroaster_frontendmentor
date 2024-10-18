import { fraunces } from '@/fonts/fonts';
import { calculatePrice } from 'app/utils/switch/calculatePrice';
import { mapDeliver } from 'app/utils/switch/mappers';
import { DeliverEnum, GrammageEnum } from 'app/utils/types/formTypes';

interface CheckoutButtonProps {
  deliver: DeliverEnum;
  grammage: GrammageEnum;
  onClick: () => void;
}

export default function CheckoutButton({
  deliver,
  grammage,
  onClick,
}: CheckoutButtonProps) {
  const orderPrice = calculatePrice(grammage, deliver);
  return (
    <button
      type="button"
      className={`${fraunces.className} h-[56px] w-[279px] rounded-[8px] bg-cyan text-[18px] leading-[25px] text-cream`}
      onClick={onClick}
    >
      {`Checkout - ${orderPrice} / ${mapDeliver(deliver)}`}
    </button>
  );
}
