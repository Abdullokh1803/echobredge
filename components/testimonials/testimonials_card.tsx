import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialsStar from "./testimonials_star";
import Image from 'next/image';

type testimonialsCardProps = {
  name: string;
  image: string;
  text: string;
  rating: number;
  work: string
};

const TestimonialsCard = ({
  name,
  image,
  text,
  rating,
  work
}: testimonialsCardProps) => {
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div>
        <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        <div className="col-span-3 order-2 lg:order-1">
          <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.4rem] sm:leading-[1.6rem] md:leading-[2rem]">
            {text}
          </p>
          <h1 className="text-xl font-semibold mt-8">{name}</h1>
          <p className="mt-3 text-gray-500">{work}</p>
          <div className="flex items-center mt-6">
            <TestimonialsStar rating={rating} />
          </div>
        </div>
        <div className="col-span-2 mx-auto order-1 lg:order-2">
            <Image src={image} alt={name} width={250} height={120} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
