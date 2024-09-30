import { fraunces } from '@/fonts/fonts';
import caffeeBrown from '@/public/caffee_brown.svg';
import caffeeGreen from '@/public/caffee_green.svg';
import caffeeRed from '@/public/caffee_red.svg';
import caffeeYellow from '@/public/caffee_yellow.svg';
import CollectionItem from './CollectionItem';

export default function Collection() {
  return (
    <article className="relative mb-[270px] flex h-[1321px] w-[285px] flex-col md:mb-[144px] md:h-[927px] md:w-[689px] md:pt-[30px] xl:mb-[200px] xl:h-[525px] xl:w-[1152px] xl:flex-row xl:gap-[30px] xl:pt-[35px]">
      <h2
        className={`${fraunces.className} mb-[13px] text-[40px] leading-[72px] text-greay md:absolute md:right-0 md:top-0 md:-z-10 md:mb-0 md:text-[96px] xl:mr-[50px] xl:text-[150px]`}
      >
        our collection
      </h2>
      <CollectionItem
        title="Gran Espresso"
        description="Light and flavorful blend with cocoa and black pepper for an intense experience"
        imageUrl={caffeeGreen}
      />
      <CollectionItem
        title="Planalto"
        description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        imageUrl={caffeeYellow}
      />
      <CollectionItem
        title="Piccollo"
        description="Mild and smooth blend featuring notes of toasted almond and dried cherry"
        imageUrl={caffeeBrown}
      />
      <CollectionItem
        title="Danche"
        description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        imageUrl={caffeeRed}
      />
    </article>
  );
}
