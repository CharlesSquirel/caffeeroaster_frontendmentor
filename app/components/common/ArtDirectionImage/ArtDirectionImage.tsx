import { getImageProps } from 'next/image';

interface ImgInfo {
  src: string;
  width: number;
  height: number;
}

interface ArtDirectionImageProps {
  alt: string;
  className?: string;
  mobileImg: ImgInfo;
  tabletImg: ImgInfo;
  desktopImg: ImgInfo;
}

export default function ArtDirectionImage({
  alt,
  className,
  mobileImg,
  tabletImg,
  desktopImg,
}: ArtDirectionImageProps) {
  const common = { alt: alt, quality: 100 };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: desktopImg.width,
    height: desktopImg.height,
    src: desktopImg.src,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: tabletImg.width,
    height: tabletImg.height,
    src: tabletImg.src,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: mobileImg.width,
    height: mobileImg.height,
    src: mobileImg.src,
  });
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img
        {...rest}
        alt={alt}
        className={`${className} w-[${mobileImg.width}px] h-[${mobileImg.height}px] md:w-[${tabletImg.width}px] md:h-[${tabletImg.height}px] xl:w-[${desktopImg.width}px] xl:h-[${desktopImg.height}px]`}
      />
    </picture>
  );
}
