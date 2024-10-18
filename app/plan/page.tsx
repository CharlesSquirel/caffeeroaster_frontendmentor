import Create from '@/components/Create/Create';
import HeroPlan from '@/components/HeroPlan/HeroPlan';
import Works from '@/components/Works/Works';

export default function Page() {
  return (
    <>
      <HeroPlan />
      <Works mode="dark" />
      <Create />
    </>
  );
}
