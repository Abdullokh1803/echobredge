import React from "react";
import Image from "next/image";

type heroProps = {
  id: string;
};

const Hero = ({ id }: heroProps) => {
  return (
    <header
      id={id}
      className="w-full pt-[4vh] md:pt-[12vh] h-full bg-[#f7f3fb]"
    >
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-[80vh] max-[450px]:h-full mx-auto">
        <div className="flex items-center gap-12 max-[450px]:flex-col-reverse max-[450px]:pt-[100px]">
          <div className="w-[50%] max-[450px]:w-full">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-[44px] mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Speak Any Language, Understand Every Voice – Instantly with AI.
            </h1>
            <p className="text-gray-700 text-[16px]">
              EchoBridge is an AI-powered video conferencing platform with
              real-time speech and sign language translation. It enables
              seamless global communication by removing language barriers while
              preserving users natural voices through AI cloning.
            </p>
            <div className="flex mt-8 mb-8 items-center space-x-4">
              <button className="max-[450px]:py-3 min-[425px]:text-[14px] md:px-8 md:py-3 px-6 text-white font-semibold text-base bg-[#8A2BE2] hover:bg-[#6200be] transition-all duration-200 rounded-full shadow-sm cursor-pointer">
                Try For Free
              </button>
              <button className="max-[450px]:py-3 min-[425px]:text-[14px] md:px-8 md:py-3 px-6 text-white font-semibold text-base bg-[#0e86fd] hover:bg-[#0069d2] transition-all duration-200 rounded-full shadow-sm cursor-pointer">
                Book a Demo
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="block"
          >
            <Image src="/images/heroImg.png" alt="hero" width={700} height={700} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
