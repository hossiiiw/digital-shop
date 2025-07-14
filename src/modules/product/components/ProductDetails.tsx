import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import {
  ArrowLeft,
  GalleryThumbnailsIcon,
  Heart,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';
function ProductDetails({
  name,
  price,
  category,
  quantity,
  images,
  color,
  display,
  id,
}) {
  return (
    <Card className="flex flex-col md:flex-row items-center justify-between p-12">
      <img src={images[1].image} alt="" className="w-[60%] md:w-[40%] " />
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-xl mx-auto ">
          {name} ({quantity})
        </h2>
        <p className="text-gray-500 mx-auto mb-4">{category}</p>
        <div className="flex flex-col md:flex-col lg:flex-row  gap-2">
          <p className="font-bold w-22 ">Color : </p>
          <p>
            {color?.map((item) => {
              return <p className="text-gray-500  "> {item} </p>;
            })}
          </p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-2 mt-4">
          <p className="font-bold w-22">Display : </p>
          <p>
            {display?.map((item) => {
              return <p className="text-gray-500">{item} </p>;
            })}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className=" text-lg font-semibold">const : {price} $</p>
        </div>

        <div className="flex flex-col">
          <Button className="w-66 mt-4 p-6 font-bold cursor-pointer ">
            <ShoppingCart />
          </Button>
          <Link href="/products">
            <Button
              className="animate w-66 mt-4 p-6 font-bold cursor-pointer"
              variant="outline"
            >
              <ArrowLeft className="animate-left" /> Back to Product
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ProductDetails;
