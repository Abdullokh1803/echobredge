import React from "react";
import { FaCheck } from "react-icons/fa";

type priceCardProps = {
  plan: {
    id: number;
    plan: string;
    price: number;
    quantity: string;
    pluses: string[];
  };
};

const PriceCard = ({ plan }: priceCardProps) => {
  return (
    <div className="bg-white flex flex-col justify-between p-12 rounded-lg shadow-lg h-[636px]">
      <div>
        <p className="mt-8 text-xl font-semibold text-[#0e86fd] text-center">
          {plan.plan} Plan
        </p>
        <div className="text-2xl font-medium mt-4 text-center">
          $<span className="text-5xl font-blod">{plan.price}</span>/mo
        </div>
        <p className="mt-2 text-gray-600 text-center">{plan.quantity}</p>

        <div className="mt-10">
          {plan.pluses.map((plus, i) => (
            <div
              key={i}
              className="text-center mb-4 flex items-center space-x-3"
            >
              <div className="text-center w-8 h-8 bg-gray-200 rounded-full justify-center flex items-center flex-col">
                <FaCheck className="text-green-500" />
              </div>
              <p className="w-[230px] text-start text-sm font-semibold text-gray-700">
                {plus}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="rounded-xl bg-[#8A2BE2] cursor-pointer block w-full p-4 text-base md:text-lg text-white font-bold hover:bg-[#6200be] transition-all duration-300 ">
          Get {plan.plan}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
