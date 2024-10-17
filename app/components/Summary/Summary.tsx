import SummaryDynamicInfo from './SummaryDynamicInfo';

export default function Summary() {
  return (
    <article className="mb-[56px] flex w-[328px] flex-col gap-2 rounded-[10px] bg-chooseBg px-6 py-8 text-white">
      <h3 className="text-base uppercase opacity-50">Order Summary</h3>
      <SummaryDynamicInfo />
    </article>
  );
}
