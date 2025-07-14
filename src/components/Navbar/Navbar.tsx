import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header className="w-full fixed z-99999 flex items-center justify-between md:px-h-[20px] p-6 bg-gray-100 shadow-xl">
      <div className="flex items-center gap-4">
        <MonitorSmartphone />
        <Link href="/" className="font-bold  md:text-xl">
          Digital Shop
        </Link>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Navbar;
