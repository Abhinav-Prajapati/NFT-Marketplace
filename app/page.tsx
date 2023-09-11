"use client";

import Image from "next/image";
import Header from "./components/Header/Header";
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
      <Header />
      <Hero />

      <HorizontalScrollCarouselWrapper start={0} end={1}>
        <div className="grid grid-cols-5 gap-96">
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
        <div className="grid grid-cols-5 gap-96">
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
