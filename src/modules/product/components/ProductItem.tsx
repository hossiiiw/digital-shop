import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import { GalleryThumbnailsIcon, Heart } from 'lucide-react';
import Link from 'next/link';

interface IProductProps {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  images: any;
}
async function ProductItem({
  id,
  name,
  price,
  category,
  quantity,
  images,
}: IProductProps) {
  return (
    <Card className="w-[90%] mx-auto md:w-[400px] transform transition-transform duration-500 hover:scale-105">
      <CardHeader>
        <div className="relative h-[300px] w-full">
          <img
            src={images[1].image}
            alt=""
            className="  h-[300px] w-full rounded-t-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">{category}</p>
        <div className="flex justify-between items-center mt-2">
          <p className=" text-lg font-semibold">{price} $</p>
          <div className="flex gap-2">
            <Heart />
            <Link href={''}>
              <GalleryThumbnailsIcon />
            </Link>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <Link
            className="w-full p-2"
            href={`http://localhost:3000/products/${id}`}
          >
            More deatails
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
