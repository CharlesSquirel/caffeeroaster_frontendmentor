import { navLinks } from 'app/data/navLinks';
import Link from 'next/link';
import Logo from '../common/Logo/Logo';
import NavMobile from './NavMobile';

export default function Header() {
  return (
    <header className="mb-[40px] flex h-[18px] w-[327px] items-baseline justify-between md:mb-[53px] md:h-[26px] md:w-[689px] xl:mb-[44px] xl:w-[1280px]">
      <Logo width={163} height={18} textColor="dark" />
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-sm font-bold uppercase tracking-[0.92px] text-greay">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-blueDark">
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <NavMobile />
    </header>
  );
}
