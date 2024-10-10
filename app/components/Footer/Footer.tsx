import Logo from '../common/Logo/Logo';
import FooterNav from './FooterNav';
import FooterSocialMedia from './FooterSocialMedia';

export default function Footer() {
  return (
    <footer className="flex w-[327px] flex-col items-center bg-chooseBg p-[55px] md:w-[688px] md:px-0 xl:w-[1280px] xl:flex-row xl:px-[85px] xl:py-[47px]">
      <Logo
        width={218}
        height={24}
        classNameContainer="mb-[49px] md:mb-[32px] xl:mb-0 xl:mr-[103px]"
        classNameImg="md:h-[26px] md:w-[236px]"
        textColor="light"
      />
      <FooterNav />
      <FooterSocialMedia />
    </footer>
  );
}
