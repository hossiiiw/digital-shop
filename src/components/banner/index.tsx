import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui';

import Image1 from './image/1.webp';
import Image2 from './image/2.png';
import Image3 from './image/3.jpg';
import Image4 from './image/4.webp';

import Image from 'next/image';
function Banner() {
  return (
    <div className="w-full ">
      <Carousel className=" max-w-[70%] sm:max-w-[80%] md:max-w-[100%] mx-auto">
        <CarouselContent>
          {[Image1, Image2, Image3, Image4].map((image, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="relative  w-full h-[200px] md:h-[500px] flex items-center justify-center ">
                    <Image
                      src={image}
                      alt="Image"
                      fill
                      className="object-contain "
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Banner;
