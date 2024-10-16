interface FormOptionInterface {
  option_first_title: string;
  option_first_description: string;
  option_second_title: string;
  option_second_description: string;
  option_third_title: string;
  option_third_description: string;
  name: string;
}

interface DropdownDataInterface {
  title: string;
  optionsInfo: FormOptionInterface;
}

export const dropdownData: DropdownDataInterface[] = [
  {
    title: 'How do you drink your coffee?',
    optionsInfo: {
      option_first_title: 'Capsule',
      option_first_description:
        'Compatible with Nespresso systems and similar brewers',
      option_second_title: 'Filter',
      option_second_description:
        'For pour over or drip methods like Aeropress, Chemex, and V60',
      option_third_title: 'Expresso',
      option_third_description:
        'Dense and finely ground beans for an intense, flavorful experience',
      name: 'capsule',
    },
  },
  {
    title: 'What type of coffee?',
    optionsInfo: {
      option_first_title: 'Single origin',
      option_first_description:
        'Distinct, high quality coffee from a specific family-owned farm',
      option_second_title: 'Decaf',
      option_second_description:
        'Just like regular coffee, except the caffeine has been removed',
      option_third_title: 'Blended',
      option_third_description:
        'Combination of two or three dark roasted beans of organic coffees',
      name: 'type',
    },
  },
  {
    title: 'How much do you like?',
    optionsInfo: {
      option_first_title: '250g',
      option_first_description:
        'Perfect for the solo drinker. Yields about 12 delicious cups.',
      option_second_title: '500g',
      option_second_description:
        'Perfect option for a couple. Yields about 40 delectable cups.',
      option_third_title: '1000g',
      option_third_description:
        'Perfect for offices and events. Yields about 90 delightful cups.',
      name: 'grammage',
    },
  },
  {
    title: 'Want us to grind them?',
    optionsInfo: {
      option_first_title: 'Wholebean',
      option_first_description:
        'Best choice if you cherish the full sensory experience',
      option_second_title: 'Filter',
      option_second_description:
        'For drip or pour-over coffee methods such as V60 or Aeropress',
      option_third_title: 'Cafetiére',
      option_third_description:
        'Course ground beans specially suited for french press coffee',
      name: 'grind',
    },
  },
  {
    title: 'How often should we deliver?',
    optionsInfo: {
      option_first_title: 'Every week',
      option_first_description:
        '$7.20 per shipment. Includes free first-class shipping.',
      option_second_title: 'Every 2 weeks',
      option_second_description:
        '$9.60 per shipment. Includes free priority shipping.',
      option_third_title: 'Every month',
      option_third_description:
        '$12.00 per shipment. Includes free priority shipping.',
      name: 'deliver',
    },
  },
];
