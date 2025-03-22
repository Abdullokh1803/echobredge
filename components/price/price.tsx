import React from "react";
import PriceCard from "./price_card";

type priceProps = {
  id: string;
};

const Price = ({ id }: priceProps) => {
  const plans = [
    {
      id: 1,
      price: 0,
      plan: "Free",
      quantity: "Per User",
      pluses: [
        "Translation into 5 languages",
        "Limit of 40 minutes a day",
        "Basic support",
      ],
    },
    {
      id: 2,
      price: 10,
      plan: "Pro",
      quantity: "Per Team",
      pluses: [
        "Translation into 30+ languages + sign language",
        "Voice cloning (standard)",
        "Unlimited call time",
        "Integration with calendars and CRM",
        "Support 24/7",
      ],
    },
    {
      id: 3,
      price: 20,
      plan: "Enterprise",
      quantity: "Per Team",
      pluses: [
        "Customized language models for business",
        "Premium voice cloning",
        "Corporate security and data management",
        "API access for integration with internal systems",
        "Priority support and custom solutions",
      ],
    },
  ];

  return (
    <section id={id} className="pt-16 pb-16 bg-purple-50 ">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Pricing Plans
      </h2>
      <div className="w-[90%]  md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {plans.map((plan, i) => (
          <div data-aos="flip-left" key={i}>
            <PriceCard plan={plan} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
