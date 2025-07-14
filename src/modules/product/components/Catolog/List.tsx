'use client';
import React from 'react';
import { DATA } from '../../mock/products';
import { Card, CardContent } from '@/components/ui';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

function CatalogList() {
  const params = useSearchParams();
  const id = params.get('id');
  const images = DATA[0].images;
  return (
    <div className="flex flex-wrap justify-center mb-6">
      {images?.map((_image: any, index) => {
        return (
          <div className="p-1" key={index}>
            <Card>
              <CardContent className="flex w-[400px] h-[400px] items-center justify-center p-6">
                <Image
                  src={_image?.image}
                  alt="gallery"
                  height={400}
                  width={400}
                  className="hover:scale-105 transform transition-transform duration-500"
                />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default CatalogList;
