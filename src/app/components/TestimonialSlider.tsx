// // components/TestimonialSlider.tsx
// import React, { useState } from "react";
// import TestimonialCard from "./TestimonialCard";
// import ArrowButton from "./ArrowButton";

// const testimonials = [
//   {
//     testimonial: "Upon launching a new arm of our business...",
//     name: "Jonathan Butcher",
//     role: "Director of Operations and Direct Sales, CPD",
//   },
//   {
//     testimonial: "AVS West Africa helped us scale our development...",
//     name: "Sarah Adams",
//     role: "CEO, Tech Innovators",
//   },
//   // Add more testimonials as needed
// ];

// const TestimonialSlider: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrevious = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="relative bg-gray-900 py-12">
//       <h2 className="text-2xl text-white text-center mb-6">
//         Here’s what they had to say
//       </h2>

//       <TestimonialCard
//         testimonial={testimonials[currentSlide].testimonial}
//         name={testimonials[currentSlide].name}
//         role={testimonials[currentSlide].role}
//       />

//       <ArrowButton direction="left" onClick={handlePrevious} />
//       <ArrowButton direction="right" onClick={handleNext} />

//       {/* Indicator Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {testimonials.map((_, idx) => (
//           <div
//             key={idx}
//             className={`h-2 w-2 rounded-full ${
//               currentSlide === idx ? "bg-orange-500" : "bg-gray-500"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ArrowButton from "./ArrowButton";

const testimonials = [
  {
    testimonial:
      "  Joseph Tanner since we first met a couple of years ago as strangers on lunchclub where we had a totally honest chat about the ebb of the journey I was engulfed in..., I can't thank you enough.",
    name: "Will",
    role: "Director of Thisisuntapped",
  },
  {
    testimonial: "Upon launching a new arm of our business...",
    name: "Jonathan Butcher",
    role: "Director of Operations and Direct Sales, CPD",
  },
  {
    testimonial: "AVS West Africa helped us scale our development...",
    name: "Sarah Adams",
    role: "CEO, Tech Innovators",
  },

  // Add more testimonials as needed
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle sliding to the next testimonial
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  // Function to handle sliding to the previous testimonial
  const handlePrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-slide functionality using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative bg-transparent py-12">
      <h2 className="text-2xl text-white text-center mb-6">
        Here’s what they had to say
      </h2>

      <TestimonialCard
        testimonial={testimonials[currentSlide].testimonial}
        name={testimonials[currentSlide].name}
        role={testimonials[currentSlide].role}
      />

      <ArrowButton direction="left" onClick={handlePrevious} />
      <ArrowButton direction="right" onClick={handleNext} />

      {/* Indicator Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              currentSlide === idx ? "bg-slate-100" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
