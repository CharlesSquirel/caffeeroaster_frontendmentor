import logoDark from '@/icons/logo.svg';
import logoLight from '@/icons/logo_light.svg';
import Image from 'next/image';

interface LogoProps {
  width: number;
  height: number;
  classNameContainer?: string;
  classNameImg?: string;
  textColor: 'light' | 'dark';
}

export default function Logo({
  width,
  height,
  classNameContainer,
  textColor,
  classNameImg,
}: LogoProps) {
  return (
    <h1 className={classNameContainer}>
      <Image
        src={textColor === 'dark' ? logoDark : logoLight}
        alt="Coffeeroaster logo"
        width={163}
        height={18}
        className={classNameImg}
      />
    </h1>
  );
}
