"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import Image from "next/image";
import Hover3d from "../../utils/Hover3D";

const Hero = () => {
  const hero = useRef<HTMLDivElement>(null);
  const imageHover = Hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={heroRef}>
      <div ref={hero} className="flex flex-row">
        <div className="w-1/2 mx-16 my-28">
          {/* Text highligh */}
          <h1 className="pb-3 text-5xl  text-[#f2994a]">
            Buy,collect,and sell extraordinary NFTs
          </h1>
          <p className="text-[0.75rem] py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos soluta
            culpa quis beatae dolorem deleniti nostrum a ullam eius ipsam!
            Eveniet maxime facilis volguptas quisquam fuga iste ratione ipsum
            vitae.
          </p>

          {/* Button */}
          <div className="flex flex-row">
            <div className="pr-2">
              <Button className=" bg-[#f2994a]">Get Started</Button>
            </div>
            <div className="px-2">
              <Button variant="outline"> Learn More</Button>
            </div>
          </div>
        </div>

        {/* Monkey Image */}
        <div
          style={{
            transform: imageHover.transform,
          }}
          className="p-4 mx-12 my-24 border-[1px] border-[#f2994a]/30 rounded-md z-40 hover:border-gray-50/60"
        >
          <Image
            src="/images/monkey.png"
            alt="hero"
            width={390}
            height={390}
            className="rounded-md"
            style={{
              transform: imageHover.transform,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
