"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const partners = [
    // { src: "/partners/thoughtbot.png", alt: "thoughtbot" },
    // { src: "/partners/ahack.png", alt: "ahack" },
    // { src: "/partners/consid.png", alt: "consid" },
    { src: "/partners/amalgama.png", alt: "amalgama" },
    { src: "/partners/plantec.png", alt: "plantec" },
    // { src: '/partners/pierce-future.png', alt: 'pierce future' },
    { src: "/partners/untapped.png", alt: "untapped" },
    // { src: '/partners/flipify.png', alt: 'flipify media' },
    { src: "/partners/covve.png", alt: "covve" },
  ];

  const moveSlide = (direction) => {
    const newSlide = direction === "next" ? currentSlide + 1 : currentSlide - 1;

    if (newSlide >= 0 && newSlide < partners.length) {
      setCurrentSlide(newSlide);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const maxSlidesInView = Math.floor(containerWidth / 220); // Assuming slide width is 220px
      const lastVisibleSlide = currentSlide + maxSlidesInView;

      if (lastVisibleSlide >= partners.length) {
        setCurrentSlide(partners.length - maxSlidesInView);
      }
    }
  }, [currentSlide, partners.length]);

  useEffect(() => {
    const width = 220; // Change this value according to your slide width
    controls.start({
      x: -currentSlide * width,
      transition: { type: "tween" },
    });
  }, [controls, currentSlide]);

  // Trigger the animation on component mount
  useEffect(() => {
    controls.start({ x: -currentSlide * 220 });
  }, [controls, currentSlide]);

  return (
    <div className="bg-neutral-200 text-3xl flex flex-col py-20 md:py-40 px-2 md:px-2 w-full space-y-4 md:space-y-10">
      <h2 className="font-khand font-medium text-neutral-400 text-center">
        Partners we work with
      </h2>
      <div className="flex items-center w-full mx-auto md:space-x-8 relative">
        <button
          className="w-1/12 text-xs md:text-sm flex p-4 text-right opacity-20 hover:opacity-100 transition duration-300 max-md:hidden"
          onClick={() => moveSlide("prev")}
        >
          &#9668;
        </button>
        <div
          className="overflow-hidden w-10/12 max-md:m-auto flex relative"
          ref={containerRef}
        >
          <motion.div
            className="md:flex md:space-x-10 max-md:space-y-4"
            style={{
              width: `${partners.length * 220}px`,
              transform: `translateX(-${currentSlide * 220}px)`,
            }}
            animate={controls}
          >
            {partners.map((partner, index) => (
              <div
                key={`partner_${partner.alt}`}
                className="w-[150px] md:w-[220px] h-[50px] relative overflow-hidden m-auto"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  size="100vw"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <button
          className="w-1/12 text-xs md:text-sm flex p-4 text-right opacity-20 hover:opacity-100 transition duration-300 max-md:hidden"
          onClick={() => moveSlide("next")}
        >
          &#9658;
        </button>
      </div>
    </div>
  );
}
