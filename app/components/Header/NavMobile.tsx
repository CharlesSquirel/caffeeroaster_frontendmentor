'use client';

import { fraunces } from '@/fonts/fonts';
import close from '@/icons/icon-close.svg';
import hamburger from '@/icons/icon-hamburger.svg';
import { navLinks } from 'app/data/navLinks';
import useOutsideClick from 'app/utils/hooks/useOutsideClick';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function NavMobile() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLButtonElement>(null);
  useOutsideClick(refContainer, refBtn, () => setIsNavMobileOpen(false));
  return (
    <>
      <button
        ref={refBtn}
        className="md:hidden"
        onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
      >
        <Image
          src={isNavMobileOpen ? close : hamburger}
          alt="Open navigation button"
          height={18}
          width={16}
        />
      </button>
      {isNavMobileOpen && (
        <nav
          ref={refContainer}
          className="nav-gradient absolute left-[50%] top-[90px] h-[550px] w-[355px] translate-x-[-50%] pt-[50px]"
        >
          <ul
            className={` ${fraunces.className} flex flex-col items-center gap-8 text-2xl uppercase`}
          >
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setIsNavMobileOpen(false)}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
