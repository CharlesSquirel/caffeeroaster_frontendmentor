import { fraunces } from '@/fonts/fonts';
import PlanButton from '../common/PlanButton';
import Progress from '../common/Progress/Progress';
import WorksItem from './WorksItem';

interface WorksItemData {
  title: string;
  description: string;
}

const worksItems: WorksItemData[] = [
  {
    title: 'Pick your coffee',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    title: 'Choose the frequency',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    title: 'Receive and enjoy!',
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

export default function Works() {
  return (
    <article className="mb-[120px] flex w-[327px] flex-col items-center bg-cream md:mb-[144px] md:w-[689px] md:items-start xl:mb-[200px] xl:w-[1045px]">
      <h2
        className={`${fraunces.className} mb-[80px] text-center text-[24px] leading-[32px] text-greay md:mb-[40px] md:text-start xl:mb-[80px]`}
      >
        How it works
      </h2>
      <Progress />
      <div className="md:mb-[44px] md:flex md:flex-row xl:mb-[64px] xl:w-[1045px]">
        {worksItems.map((item, index) => (
          <WorksItem
            title={item.title}
            description={item.description}
            number={String(index + 1)}
            isLast={index === worksItems.length - 1}
            key={index}
          />
        ))}
      </div>
      <PlanButton />
    </article>
  );
}
