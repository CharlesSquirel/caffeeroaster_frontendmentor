import Image from 'next/image';
import logo from '../../assets/logo.svg';
import NavMobile from './NavMobile';

export default function Header() {
  return (
    <header className="mb-[40px] flex h-[18px] w-[327px] items-baseline justify-between md:mb-[53px] md:h-[26px] md:w-[689px] xl:mb-[44px] xl:w-[1280px]">
      <h1>
        <Image src={logo} alt="Coffeeroaster logo" width={163} height={18} />
      </h1>
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-sm font-bold uppercase tracking-[0.92px] text-greay">
          <li className="hover:text-blueDark">Home</li>
          <li className="hover:text-blueDark">About us</li>
          <li className="hover:text-blueDark">Create your plan</li>
        </ul>
      </nav>
      <NavMobile />
    </header>
  );
}
