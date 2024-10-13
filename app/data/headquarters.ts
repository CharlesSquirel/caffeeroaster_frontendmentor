import AustraliaIcon from '@/icons/australia.svg';
import CanadaIcon from '@/icons/canada.svg';
import UnitedKingdomIcon from '@/icons/uk.svg';

interface HeadquarterInterface {
  title: string;
  address: string;
  imgUrl: string;
  imgAlt: string;
}

export const headquarters: HeadquarterInterface[] = [
  {
    title: 'United Kingdom',
    address: '68 Asfordby Rd Alcaston SY6 1YA +44 1241 918425',
    imgUrl: UnitedKingdomIcon,
    imgAlt: 'United Kingdom icon',
  },
  {
    title: 'Canada',
    address: '1528 Eglinton Avenue Toronto Ontario M4P 1A6 +1 416 485 2997',
    imgUrl: CanadaIcon,
    imgAlt: 'Canada icon',
  },
  {
    title: 'Australia',
    address: '36 Swanston Street Kewell Victoria +61 4 9928 3629',
    imgUrl: AustraliaIcon,
    imgAlt: 'Australia icon',
  },
];
