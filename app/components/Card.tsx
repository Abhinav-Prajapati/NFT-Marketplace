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
    <div className="">
      <div className="border-x-[0.1px] border-t-[0.1px] border-gray-500/70 p-2 relative h-[55vh] w-[46vh]  overflow-hidden rounded-lg hover:border-[#f2994a] ease-in-out ">
        <p className="absolute px-2 text-sm scale-125 bg-blue-800 rounded-full top-6 right-5">
          New
        </p>
        <div>
          <div className="absolute bottom-12 left-4">
            <Button className=" bg-[#f2994a]">{title}</Button>
          </div>
          <p className="absolute bottom-3 left-4 text-xl text-gray-400/80 text-[12px] shadow-5xl">
            {description}
          </p>
        </div>
        <Image
          src={image}
          alt={title}
          fill={true} // This is important for the image to fill its container
          className="object-cover p-4 rounded-lg shadow-inner -z-10 shadow-gray-500j "
        />
        <div className="absolute bottom-0 w-full -z-10 from-black to-transparent bg-gradient-to-t h-1/4"></div>
      </div>
    </div>
  );
};

export default Card;
