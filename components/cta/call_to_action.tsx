import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full py-8 bg-gray-50">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Join the Future of Global Communication
      </h2>
      <div className="flex max-[450px]:flex-col max-[450]:gap-6 justify-around w-[90%] max-[450px]:w-[85%] my-20 mx-auto p-8 bg-white shadow-md rounded-md">
        <button className="max-[450px]:w-[100%] w-[40%] max-[450px]:py-4 md:px-8 md:py-4 px-6 text-white font-semibold text-base bg-[#8A2BE2] hover:bg-[#6200be] transition-all duration-200 rounded-full shadow-sm cursor-pointer">
          Try For Free
        </button>
        <button className="max-[450px]:w-[100%] w-[40%] max-[450px]:py-4 md:px-8 md:py-4 px-6 text-white font-semibold text-base bg-[#0e86fd] hover:bg-[#0069d2] transition-all duration-200 rounded-full shadow-sm cursor-pointer">
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
