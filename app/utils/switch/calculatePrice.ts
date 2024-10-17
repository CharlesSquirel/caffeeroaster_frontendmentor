import { DeliverEnum, GrammageEnum } from '../types/formTypes';

interface DeliverPricesTypes {
  week: number;
  twoWeeks: number;
  month: number;
}

interface PricesPerShipmentTypes {
  small: DeliverPricesTypes;
  medium: DeliverPricesTypes;
  large: DeliverPricesTypes;
}

const pricesPerShipment: PricesPerShipmentTypes = {
  small: {
    week: 7.2,
    twoWeeks: 9.6,
    month: 12,
  },
  medium: {
    week: 13,
    twoWeeks: 17.5,
    month: 22,
  },
  large: {
    week: 22,
    twoWeeks: 32,
    month: 42,
  },
};

export const calculatePrice = (
  grammage: GrammageEnum,
  deliver: DeliverEnum,
): string => {
  let price = 0;

  switch (grammage) {
    case GrammageEnum.SMALL:
      switch (deliver) {
        case DeliverEnum.WEEK:
          price = pricesPerShipment.small.week;
          break;
        case DeliverEnum.WEEKS:
          price = pricesPerShipment.small.twoWeeks;
          break;
        case DeliverEnum.MONTH:
          price = pricesPerShipment.small.month;
          break;
      }
      break;

    case GrammageEnum.MEDIUM:
      switch (deliver) {
        case DeliverEnum.WEEK:
          price = pricesPerShipment.medium.week;
          break;
        case DeliverEnum.WEEKS:
          price = pricesPerShipment.medium.twoWeeks;
          break;
        case DeliverEnum.MONTH:
          price = pricesPerShipment.medium.month;
          break;
      }
      break;

    case GrammageEnum.LARGE:
      switch (deliver) {
        case DeliverEnum.WEEK:
          price = pricesPerShipment.large.week;
          break;
        case DeliverEnum.WEEKS:
          price = pricesPerShipment.large.twoWeeks;
          break;
        case DeliverEnum.MONTH:
          price = pricesPerShipment.large.month;
          break;
      }
      break;

    default:
      return 'Invalid grammage or delivery option';
  }

  return String(price);
};
