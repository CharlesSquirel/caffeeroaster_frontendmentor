import IconFb from '@/icons/IconFb';
import IconInstagram from '@/icons/IconInstagram';
import IconTwitter from '@/icons/IconTwitter';

export default function FooterSocialMedia() {
  return (
    <div className="flex items-center gap-[24px]">
      <a href="#">
        <IconFb />
      </a>
      <a href="#">
        <IconTwitter />
      </a>
      <a href="#">
        <IconInstagram />
      </a>
    </div>
  );
}
