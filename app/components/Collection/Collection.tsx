import { fraunces } from '@/app/fonts/fonts';
import caffeeBrown from '../../../public/caffee_brown.svg';
import caffeeGreen from '../../../public/caffee_green.svg';
import caffeeRed from '../../../public/caffee_red.svg';
import caffeeYellow from '../../../public/caffee_yellow.svg';
import CollectionItem from './CollectionItem';

export default function Collection() {
  return (
    <article className="relative mb-[120px] flex h-[1321px] w-[285px] flex-col">
      <h2
        className={`${fraunces.className} mb-[13px] text-[40px] leading-[72px] text-greay`}
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
