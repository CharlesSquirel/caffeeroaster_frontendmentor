import { fraunces } from '@/fonts/fonts';
import { worksItems } from 'app/data/worksData';
import PlanButton from '../common/PlanButton';
import Progress from '../common/Progress/Progress';
import WorksItem from './WorksItem';

interface WorksProps {
  mode: 'light' | 'dark';
}

export default function Works({ mode }: WorksProps) {
  return (
    <article
      className={`${mode === 'light' ? 'bg-cream' : 'min-h-[1223px] bg-chooseBg px-[24px] py-[80px]'} mb-[120px] flex w-[327px] flex-col items-center md:mb-[144px] md:w-[689px] md:items-start xl:mb-[200px] xl:w-[1045px]`}
    >
      <h2
        className={`${fraunces.className} ${mode === 'dark' && 'hidden'} mb-[80px] text-center text-[24px] leading-[32px] text-greay md:mb-[40px] md:text-start xl:mb-[80px]`}
      >
        How it works
      </h2>
      <Progress />
      <div
        className={`${mode === 'light' ? 'text-blueDark' : 'text-cream'} md:mb-[44px] md:flex md:flex-row xl:mb-[64px] xl:w-[1045px]`}
      >
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
      {mode === 'light' && <PlanButton />}
    </article>
  );
}
