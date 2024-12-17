// components/TestimonialCard.tsx
import Link from "next/link";
import React from "react";

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  role,
}) => {
  return (
    <>
      <div className="text-center max-w-xl mx-auto">
        <div className="text-orange-500 text-xl mb-4">★★★★★</div>
        <p className="text-white text-lg italic mb-4">"{testimonial}"</p>
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-gray-400">{role}</p>
      </div>
    </>
  );
};

export default TestimonialCard;
