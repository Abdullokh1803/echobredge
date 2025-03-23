import React from "react";
import {
  FaMicrophone,
  FaVideo,
  FaBoltLightning,
  FaLock,
  FaBan,
} from "react-icons/fa6";
import { FaHandPeace } from "react-icons/fa";

type howItWorksProps = {
  id: string;
};

const HowItWorks = ({ id }: howItWorksProps) => {
  return (
    <section id={id} className="mt-20">
      <h2 className="my-6 text-2xl md:text-3xl capitalize font-bold text-center">
        How It Works
      </h2>
      <div className="bg-img bg-cover bg-center w-full h-[90vh] relative max-[450px]:h-[80vh]">
        <div
          data-aos="fade-up"
          className="w-36 gap-4 max-[450px]:gap-3 flex flex-col items-center text-center absolute top-[90px] left-[340px] max-[450px]:top-[160px] max-[450px]:left-0"
        >
          <h2>Registration and AI voice clone.</h2>
          <FaMicrophone className=" size-[32px] text-blue-500 max-[450px]:size-[22px]" />
        </div>
        <div
          data-aos="fade-up"
          className="w-50 max-[450px]:w-45 gap-4 max-[450px]:gap-3 flex flex-col items-center text-center absolute top-[80px] left-[790px] max-[450px]:top-[90px] max-[450px]:left-[80px]"
        >
          <h2>Creating or connecting to a meeting.</h2>
          <FaVideo className=" size-[32px] text-yellow-500" />
        </div>
        <div
          data-aos="fade-up"
          className="w-50 max-[450px]:w-45 gap-4 max-[450px]:gap-3 flex flex-col items-center text-center absolute top-[200px] left-[1130px] max-[450px]:top-[80px] max-[450px]:left-[210px]"
        >
          <h2>Speech and gesture recognition.</h2>
          <FaHandPeace className=" size-[32px] text-green-500" />
        </div>
        <div
          data-aos="fade-up"
          className="w-40 gap-4 max-[450px]:gap-3 flex flex-col items-center text-center absolute top-[480px] left-[1090px] max-[450px]:top-[340px] max-[450px]:left-[230px]"
        >
          <h2>Instant translation and subtitles.</h2>
          <FaBoltLightning className=" size-[32px] text-purple-500" />
        </div>
        <div
          data-aos="fade-up"
          className="w-40 gap-4 max-[450px]:gap-3 flex flex-col items-center text-center absolute top-[430px] left-[600px] max-[450px]:top-[280px] max-[450px]:left-[70px]"
        >
          <h2>Security and flexibility of settings.</h2>
          <FaLock className=" size-[32px] text-gray-500" />
        </div>
        <div
          data-aos="fade-up"
          className="w-40 gap-4 max-[450px]:gap-3 flex flex-col items-center text-center absolute top-[530px] left-[270px] max-[450px]:top-[430px] max-[450px]:left-0"
        >
          <h2>No animations or complex graphics.</h2>
          <FaBan className=" size-[32px] text-red-500" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
