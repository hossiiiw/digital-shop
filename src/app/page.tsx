import Banner from '@/components/banner';
import Wellcome from '@/components/wellcome';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Banner />
      <Wellcome />
    </div>
  );
}
