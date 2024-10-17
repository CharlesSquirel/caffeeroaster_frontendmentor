import { navLinks } from 'app/data/navLinks';
import Link from 'next/link';

export default function FooterNav() {
  return (
    <nav className="mb-[29px] md:mb-[65px] xl:mb-0 xl:mr-[368px]">
      <ul className="flex flex-col items-center gap-[24px] text-[12px] font-bold uppercase leading-[15px] tracking-[0.92px] text-greay md:flex-row md:gap-[32px]">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index} className="hover:text-cream">
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
