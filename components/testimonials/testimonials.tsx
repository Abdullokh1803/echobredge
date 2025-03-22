"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialsCard from "./testimonials_card";

type TestimonialProps = {
  id: string;
};

const testimonialsData = [
  {
    name: "Maria L.",
    image: "/images/IMG_0663.jfif",
    text: "EchoBridge allowed our team from 7 different countries to collaborate as if we all spoke the same language. It transformed our international meetings!",
    rating: 5,
    work: 'HR Director'
  },
  {
    name: "Alexey G.",
    image: "/images/IMG_0663.jfif",
    text: "We integrated EchoBridge into our customer support, and satisfaction rates increased by 40%. People finally get help in their native language",
    rating: 5,
    work: 'Customer Service Manager'
  },
  {
    name: "David S.",
    image: "/images/IMG_0663.jfif",
    text: "We used to spend thousands on translators for online courses. Now our lectures are instantly available in 30+ languages with no extra cost.",
    rating: 5,
    work: 'EdTech Entrepreneur'
  },
  {
    name: "Omar H.",
    image: "/images/IMG_0663.jfif",
    text: "EchoBridge made our business calls with investors so much smoother. No more waiting for translations!",
    rating: 5,
    work: 'Startup CEO'
  },
];

const Testimonials = ({ id }: TestimonialProps) => {
  return (
    <section id={id} className="pt-16 pb-16 bg-gray-50">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Testimonials & Case Studies
      </h1>
      <div className="mt-20 h-[45vh] max-[450px]:h-[92vh] w-[90%] md:w-[80%] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
