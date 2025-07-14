import { Button } from '@/components/ui';
import CatalogList from '@/modules/product/components/Catolog/List';
import { ArrowLeft } from 'lucide-react';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import Link from 'next/link';
import React from 'react';

function Catalog() {
  return (
    <div>
      <CatalogList />
      <Link href="/products">
        <Button className="animate w-66 mt-4 p-6 font-bold cursor-pointer">
          <ArrowLeft className="animate-left" /> Back to Product
        </Button>
      </Link>
    </div>
  );
}

export default Catalog;
