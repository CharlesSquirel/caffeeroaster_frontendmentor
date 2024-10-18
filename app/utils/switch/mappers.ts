import { blankedSeparator } from '@/components/Summary/SummaryDynamicInfo';
import { DeliverEnum, DrinkEnum } from '../types/formTypes';

export const mapDrink = (text: DrinkEnum): string => {
  switch (text) {
    case DrinkEnum.CAPSULE:
      return ' Capsules';
    case DrinkEnum.EXPRESSO:
      return ' Expresso';
    case DrinkEnum.FILTER:
      return ' Filter';
    default:
      return blankedSeparator;
  }
};

export const mapDrinkPrefix = (text: DrinkEnum): string => {
  switch (text) {
    case DrinkEnum.CAPSULE:
      return ' using';
    case DrinkEnum.EXPRESSO:
    case DrinkEnum.FILTER:
      return ' as';
    default:
      return '';
  }
};

export const mapDeliver = (text: DeliverEnum): string => {
  switch (text) {
    case DeliverEnum.WEEK:
      return 'wk';
    case DeliverEnum.WEEKS:
      return '2 wks';
    case DeliverEnum.MONTH:
      return 'mo';
    default:
      return '';
  }
};
