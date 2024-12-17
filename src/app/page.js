"use client";
import Link from "next/link";
import Logo from "./components/Logo";
import { useState, useEffect, useClient } from "react"; // Import useClient
import { motion } from "framer-motion";
import TestimonialSlider from "./components/TestimonialSlider";
const MobileView = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#67594F] via-[#243129] to-[#121212]">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${"/sea.png"})` }}
      >
        <div className="h-20 p-4 w-40 ">
          <Logo />
        </div>

        {/* main content  */}
        <div className="text-white">
          <div className="text-5xl font-semibold px-4 pb-4">
            <h1 className="">Discovering New Ventures,</h1>
            <h1>One Adventure at a Time</h1>
          </div>
          <p className="px-4 pb-12">
            We are A Venture Studio connecting you with the right expertise for
            your product or business idea. We support you and the growth of your
            business through strategic guidance and empowerment.
          </p>
          <div className="relative mx-2 p-6 border-y-[0.5px] border-line">
            <Link href="/partnership">
              <span>Looking for</span>
              <p>Partnerships & Advisory</p>
              <span className="h-full absolute right-0 top-0  flex items-center">
                &rarr;
              </span>
            </Link>
          </div>
          <div className="relative mx-2 p-6 border-y-[0.5px] border-line">
            <Link href="/technical">
              <span>Looking for</span>
              <p>Technical Activation</p>
              <span className="h-full absolute right-0 top-0  flex items-center">
                &rarr;
              </span>
            </Link>
          </div>
          <div className="relative mx-2 p-6 border-y-[0.5px] border-line">
            <Link href="/digital">
              <span>Looking for</span>
              <p>Digital Activation</p>
              <span className="h-full absolute right-0 top-0  flex items-center">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-screen overflow-hidden md:h-screen bg-gradient-to-b from-[#67594F] via-[#243129] to-[#121212]"
    >
      <div className=" md:absolute top-0 h-20 p-4 pl-6 md:pl-20 w-40 md:w-60">
        <Logo />
      </div>

      <div className="md:grid grid-cols-1 grid-rows-10 md:grid-cols-6 md:grid-rows-5 w-full h-full md:border-[0.5px] border-line">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-3 md:row-span-3 row-span-4 xl:text-5xl lg:text-4xl md:text-4xl text-3xl md:w-[80%] m-auto font-semibold text-white space-y-2 max-md:px-6 max-md:py-4"
        >
          <h1 className="my-4">Ready to start</h1>
          <h1 className=""> your Adventure?</h1>
          {/* <h1>One Adventure at a Time</h1> */}

          <br />
          <p className="lg:text-md  md:text-sm max-md:pb-10 font-normal">
            Welcome to A Venture Studio — your bridge to expertise for turning
            ideas into thriving businesses. We don't just understand your
            vision; we champion it. With a deep commitment to your success, we
            provide strategic guidance and empowerment to fuel the growth of
            your business.
          </p>
        </motion.div>
        <div className="md:col-span-3 md:col-start-1 md:row-start-4 row-span-3 row-start-5 text-white md:px-16  md:py-8 md:border-[0.5px] border-line max-md:px-6">
          <p className="lg:text-md md:text-sm max-md:pb-10">
            At our core, we specialise in tailored support for strategic
            planning, investment, and advisory services. What sets us apart is
            our curated network of technical and digital implementation
            partners, sourced organically to ensure your projects are in the
            hands of the most capable professionals.
          </p>

          <p className="lg:text-md md:text-sm mt-9 max-md:py-10">
            We're not just a studio; we're your ally, passionately invested in
            the realisation of your projects, the success of your business, and
            the achievement of your goals. Let's embark on this journey
            together, where expertise meets empathy, and innovation meets
            unwavering support.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-3 md:row-span-3 md:col-start-4 row-start-1 md:border-[0.5px] border-line max-md:absolute max-md:top-0 max-md:w-full max-md:h-full max-md:opacity-40"
          style={{ backgroundImage: `url(${"/sea.png"})` }}
        >
          {/* <TestimonialSlider /> */}
        </motion.div>

        <div className="md:col-start-4 row-start-8 md:pb-56 pt-6 md:row-start-4 md:h-full md:flex hover:bg-gradient-to-t from-green transition-all duration-300 max-md:border-y-[0.5px] md:border-[0.5px] border-line">
          <div className="w-full h-full flex">
            <Link href="/partnership" className="flex w-full">
              <div className=" md:max-w-[170px] md:m-auto md:pb-2 max-md:p-2">
                <span className="font-khand text-grey">Looking for</span>
                <p className="text-white italic lg:text-lg w-1/2">
                  Strategy, Partnerships & Advisory
                </p>
                <span className="text-white">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
        {/* max-md:border-y-[0.5px] md:border-[0.5px] border-line */}
        <div className="md:col-start-5 row-start-9 md:row-start-4 md:pb-56 pt-6 md:h-full md:flex hover:bg-gradient-to-t from-green transition duration-300 max-md:border-y-[0.5px] md:border-[0.5px] border-line">
          <div className="w-full h-full flex">
            <Link href="/digital" className="flex w-full">
              <div className=" md:max-w-[170px] md:m-auto md:pb-6 max-md:p-6">
                <span className="font-khand text-grey">Looking for</span>
                <p className="text-white italic text-lg w-1/2">
                  Brand & Digital Activation
                </p>
                <span className="text-white">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:col-start-6 row-start-10 md:pb-56 pt-6 md:row-start-4 md:h-full md:flex hover:bg-gradient-to-t from-green transition duration-300 max-md:border-y-[0.5px] md:border-[0.5px] border-line">
          <div className="w-full h-full flex">
            <Link href="/technical" className="flex w-full z-2">
              <div className=" md:max-w-[170px] md:m-auto md:pb-6 max-md:p-6">
                <span className="font-khand text-grey">Looking for</span>
                <p className="text-white italic text-lg w-1/2">
                  Technical Activation
                </p>
                <span className="text-white">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
}
