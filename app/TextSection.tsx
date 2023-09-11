"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Porps {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Porps) => {
  const text = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);

  return (
    <div className="text-[#f2994a] text-5xl px-20 py-5" ref={text}>
      <motion.p style={{ opacity, x }}>{children}</motion.p>
    </div>
  );
};

export const TextSection = () => {
  return (
    <div>
      <TextWrapper>
        recusandae facilis impedit magnam sunt hic, voluptatum, asperiores optio
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      </TextWrapper>
      <TextWrapper>
        recusandae facilis impedit magnam sunt hic, voluptatum, asperiores optio
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      </TextWrapper>
    </div>
  );
};
