import React from "react";
import CardAdvantages from "./advantages_card";

type AdvantageProps = {
  id: string;
};

const advantagesData = [
  {
    img: "/images/Rocket.png",
    title: "Instant voice translation",
    subtitle: "AI translation of speech and text",
  },
  {
    img: "/images/Books.png",
    title: "Full multi-lingual coverage",
    subtitle: "Support for 30+ languages + sign language",
  },
  {
    img: "/images/Text.png",
    title: "AI for sign language",
    subtitle: "Gesture recognition and translation",
  },
  {
    img: "/images/Link.png",
    title: "Integration with platforms",
    subtitle: "Zoom, Google Meet, Microsoft Teams",
  },
  {
    img: "/images/Fire.png",
    title: "99% accuracy and safety",
    subtitle: "AI models with training on millions of data",
  },
  {
    img: "/images/Like.png",
    title: "Maximum security",
    subtitle: "encrypted data and privacy protection.",
  },
];

const Advantages = ({ id }: AdvantageProps) => {
  return (
    <section id={id} className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Features & Benefits
      </h1>
      <div className="mt-20 w-[90%] mx-auto overflow-x-auto flex gap-12">
        <div className="flex flex-nowrap">
          {advantagesData.map((advantage, index) => (
            <div data-aos='fade-right' key={index} className="w-[340px] flex-shrink-0">
              <CardAdvantages {...advantage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
