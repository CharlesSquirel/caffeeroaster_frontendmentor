'use client';

import { fraunces } from '@/app/fonts/fonts';
import Image from 'next/image';
import { useState } from 'react';
import close from '../../assets/icon-close.svg';
import hamburger from '../../assets/icon-hamburger.svg';

export default function NavMobile() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  return (
    <>
      <button
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
        <nav className="to-[rgba(254, 252, 247, 0.5)] absolute left-0 top-[90px] w-full bg-gradient-to-b from-cream via-50%">
          <ul
            className={` ${fraunces.className} flex flex-col items-center gap-8 text-2xl uppercase`}
          >
            <li>Home</li>
            <li>About us</li>
            <li>Create your plan</li>
          </ul>
        </nav>
      )}
    </>
  );
}
