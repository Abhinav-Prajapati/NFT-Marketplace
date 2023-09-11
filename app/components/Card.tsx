"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

interface cardProps {
  title: string;
  description?: string;
  image: any;
}

const Card = ({ title, description, image }: cardProps) => {
  return (
    <div className="shadow-inner s ">
      <div className="border-x-[0.1px] border-t-[0.1px] border-gray-500/70 p-2 relative h-[63vh] w-[55vh] m-2 overflow-hidden rounded-lg hover:border-[#f2994a] ease-in-out ">
        <p className="absolute px-2 text-sm scale-75 bg-blue-800 rounded-full top-2 right-1">
          New
        </p>
        <div>
          <div className="absolute scale-75 bottom-8 left-2">
            <Button className=" bg-[#f2994a]">{title}</Button>
          </div>
          <p className="absolute bottom-3 left-4 text-sm text-gray-200/80 text-[12px] shadow-5xl">
            {description}
          </p>
        </div>
        <Image
          src={image}
          alt={title}
          fill={true} // This is important for the image to fill its container
          className="object-cover p-2 rounded-lg -z-10 "
        />
      </div>
    </div>
  );
};

export default Card;
