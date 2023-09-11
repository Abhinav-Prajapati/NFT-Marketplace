"use clinet";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { serialize } from "v8";

const FullPage = () => {
  const secRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <div className="p-2">
      <motion.div
        ref={secRef}
        style={{ scale: x, x: xTransform }}
        className="border-[1px] border-gray-500/90 p-3 w-max rounded-md hover:border-[#f2994a]/80"
      >
        <Image
          src={"/images/rover.jpg"}
          alt="rover"
          width={700}
          height={600}
          className="rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default FullPage;
