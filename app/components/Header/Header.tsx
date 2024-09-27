import Image from 'next/image';
import logo from '../../assets/logo.svg';
import NavMobile from './NavMobile';

export default function Header() {
  return (
    <header className="flex h-[18px] w-[327px] items-baseline justify-between sm:h-[26px] sm:w-[689px] md:w-full">
      <h1>
        <Image src={logo} alt="Coffeeroaster logo" width={163} height={18} />
      </h1>
      <nav className="hidden sm:block">
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
