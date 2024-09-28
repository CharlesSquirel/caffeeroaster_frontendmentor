import Image from 'next/image';
import logo from '../../assets/logo.svg';
import NavMobile from './NavMobile';

export default function Header() {
  return (
    <header className="mb-[40px] flex h-[18px] w-[327px] items-baseline justify-between md:mb-[53px] md:h-[26px] md:w-[689px] lg:mb-[44px] lg:w-full">
      <h1>
        <Image src={logo} alt="Coffeeroaster logo" width={163} height={18} />
      </h1>
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-sm font-bold uppercase tracking-[0.92px] text-greay">
          <li>Home</li>
          <li>About us</li>
          <li>Create your plan</li>
        </ul>
      </nav>
      <NavMobile />
    </header>
  );
}
