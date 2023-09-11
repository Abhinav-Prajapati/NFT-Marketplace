"use client";

import Image from "next/image";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Header/Hero";
import Background from "@/components/Backgound";
import Herolayout from "./components/Herolayout";
import Card from "./components/Card";
import { cards } from "./utils/Cards";
import FullPage from "./components/FullPage";
import { TextSection } from "./TextSection";
import HorizontalScrollCarouselWrapper from "./components/HorizontalWrapper";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <HorizontalScrollCarouselWrapper start={0} end={1}>
        <div className="grid grid-cols-5 gap-[33rem]">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            );
          })}
        </div>{" "}
      </HorizontalScrollCarouselWrapper>

      <FullPage />

      <HorizontalScrollCarouselWrapper start={1} end={0}>
        <div className="grid grid-cols-5 gap-[33rem]">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            );
          })}
        </div>{" "}
      </HorizontalScrollCarouselWrapper>
      <Herolayout>
        <TextSection />
      </Herolayout>
      <Background />
    </div>
  );
}
