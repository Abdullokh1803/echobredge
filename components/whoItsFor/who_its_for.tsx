import React from "react";
import { FaChartLine, FaGraduationCap, FaHeadset, FaSyringe } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

type whoItsForProps = {
  id: string
}

const WhoItsFor = ({id}: whoItsForProps) => {
  const cards = [
    {
      icon: <IoSearchOutline className="text-red-500" />,
      title: "HR and recruiters",
      text: "Hiring talent without language restrictions.",
    },
    {
      icon: <FaChartLine className="text-green-500" />,
      title: "Sales Department",
      text: "Negotiating with clients worldwide, increasing deal conversions",
    },
    {
      icon: <MdOutlineAttachMoney  className="text-blue-500" />,
      title: "Business and investments",
      text: "International negotiations, investor attraction, business meetings without borders.",
    },
    {
      icon: <FaHeadset className="text-yellow-500" />,
      title: "Customer support",
      text: "Connecting multilingual operators without the additional cost of translators.",
    },
    {
      icon: <FaGraduationCap  className="text-teal-500" />,
      title: "Educational institutions",
      text: "Access to training without language barriers, including online courses and webinars.",
    },
    {
      icon: <FaSyringe className="text-purple-500" />,
      title: "Medicine and law",
      text: "Accurate translations for medical consultations, international legal matters.",
    },
  ];

  return (
    <section id={id} className="bg-gray-50 pt-20 pb-20">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Who It’s For
        </h1>
        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              data-aos="flip-left"
              key={i}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md"
            >
              <div className="text-3xl w-14 h-14 bg-[#d0d0d05d] max-[450px]:text-xl max-[450px]:w-14 max-[450px]:h-10 flex items-center justify-center flex-col rounded-full">
                <span>{card.icon}</span>
              </div>
              <div className="w-[450px] text-start pl-4">
                <span className="font-semibold">{card.title}</span>
                <p className="text-gray-700 text-[13px]">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
