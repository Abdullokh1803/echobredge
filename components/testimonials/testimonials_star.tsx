"use client";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type testimonialsStarProps = {
  rating: number;
};

const TestimonialsStar = ({ rating }: testimonialsStarProps) => {
  const [star, setStar] = useState(rating);
  return (
    <div>
      <Rating style={{ maxWidth: 120 }} value={star} onChange={setStar} />
    </div>
  );
};

export default TestimonialsStar;
