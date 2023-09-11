"use client ";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface Props {
  children: React.ReactNode;
  start: number;
  end: number;
}
const HorizontalScrollCarouselWrapper = ({ children, start, end }: Props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarouselWrapper;
