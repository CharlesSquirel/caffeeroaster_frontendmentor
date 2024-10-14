import IconFb from '@/icons/IconFb';
import IconInstagram from '@/icons/IconInstagram';
import IconTwitter from '@/icons/IconTwitter';

export default function FooterSocialMedia() {
  return (
    <div className="flex items-center gap-[24px]">
      <a href="#" aria-label="Go to our facebook fanpage">
        <IconFb />
      </a>
      <a href="#" aria-label="Go to our twitter account">
        <IconTwitter />
      </a>
      <a href="#" aria-label="Go to our instagram">
        <IconInstagram />
      </a>
    </div>
  );
}
