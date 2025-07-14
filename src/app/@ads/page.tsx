import React from 'react';
import image from '@/../public/mock/iphon4.png';
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import Image from 'next/image';
function Ads() {
  return (
    <>
      <Card className=" max-w-[500px]">
        <div className="flex px-6 gap-4">
          <div className="">
            <div className="flex flex-col">
              <h2 className="font-bold text-lg mb-4">on Sale products</h2>
              <p className="text-gray-500">
                Buy outdated products with 50% discount
              </p>
              <Button className="mt-8">Buy now</Button>
            </div>
          </div>
          <div className="">
            <Image src={image} alt="" className="w-full " />
          </div>
        </div>
      </Card>
    </>
  );
}

export default Ads;
