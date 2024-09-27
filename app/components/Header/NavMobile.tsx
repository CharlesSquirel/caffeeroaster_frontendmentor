'use client';

import Image from 'next/image';
import { useState } from 'react';
import close from '../../assets/icon-close.svg';
import hamburger from '../../assets/icon-hamburger.svg';

export default function NavMobile() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  return (
    <button
      className="sm:hidden"
      onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
    >
      <Image
        src={isNavMobileOpen ? close : hamburger}
        alt="Open navigation button"
        height={18}
        width={16}
      />
    </button>
  );
}
