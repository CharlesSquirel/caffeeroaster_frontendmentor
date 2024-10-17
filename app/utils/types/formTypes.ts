enum DeliverEnum {
  WEEK = 'week',
  WEEKS = '2 weeks',
  MONTH = 'month',
}

enum GrindEnum {
  WHOLEBEAN = 'wholebean',
  FILTER = 'filter',
  CAFETERIE = 'cafetiére',
}

enum GrammageEnum {
  SMALL = '250g',
  MEDIUM = '500g',
  LARGE = '1000g',
}

enum TypeEnum {
  ORIGIN = 'origin',
  DECAF = 'decaf',
  BLENDED = 'blended',
}

enum DrinkEnum {
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
