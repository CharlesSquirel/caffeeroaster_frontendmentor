import Commitment from '@/components/Commitment/Commitment';
import Headquarters from '@/components/Headquarters/Headquarters';
import HeroAbout from '@/components/HeroAbout/HeroAbout';
import Quality from '@/components/Quality/Quality';

export default function Page() {
  return (
    <>
      <HeroAbout />
      <Commitment />
      <Quality />
      <Headquarters />
    </>
  );
}
