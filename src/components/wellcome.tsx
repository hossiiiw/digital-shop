import { MonitorSmartphone } from 'lucide-react';
import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

function Wellcome() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <span>Wellcom to </span>
      <div className="flex items-center gap-4">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-gray-800">Digital Shop</h1>
      </div>
      <Button className="mt-6 " variant={'default'} asChild>
        <Link href="/products">Go to Product</Link>
      </Button>
    </div>
  );
}

export default Wellcome;
