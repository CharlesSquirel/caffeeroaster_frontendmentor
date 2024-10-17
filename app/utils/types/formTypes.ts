export enum DeliverEnum {
  WEEK = 'week',
  WEEKS = '2 weeks',
  MONTH = 'month',
}

export enum GrindEnum {
  WHOLEBEAN = 'wholebean',
  FILTER = 'filter',
  CAFETERIE = 'cafetiére',
}

export enum GrammageEnum {
  SMALL = '250',
  MEDIUM = '500',
  LARGE = '1000',
}

export enum TypeEnum {
  ORIGIN = 'single origin',
  DECAF = 'decaf',
  BLENDED = 'blended',
}

export enum DrinkEnum {
  CAPSULE = 'capsule',
  FILTER = 'filter',
  EXPRESSO = 'expresso',
}

export interface FormTypes {
  how_drink: DrinkEnum | '';
  type: TypeEnum | '';
  grammage: GrammageEnum | '';
  grind: GrindEnum | '';
  deliver: DeliverEnum | '';
}
