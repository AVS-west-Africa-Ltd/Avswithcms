"use client";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Promote from "../components/Promote";
import { whoWeAre } from "../data/whoWeAreData";
import Partners from "../components/Partners";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

export default function Technical() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="w-full h-full bg-black"
    >
      <Hero
        backgroundImage={"/technical/hero.webp"}
        header={"Technical Activation"}
        subHeader={
          "Put your technology dependencies behind you and utilise the power of our studio expertise."
        }
        description={
          "Embrace a new approach by shifting focus from technology dependencies, and instead, leverage the expertise of our studio to drive innovative solutions and user-centred enhancements. By tapping into our studio's wealth of knowledge and creative talent, you can unlock limitless possibilities for elevating your products and services in today's dynamic technology landscape.  "
        }
        description_2={"The right people at the right time."}
      />
      <AboutUs content={whoWeAre[1]} />
      <Promote
        backgroundImage="/technical/promote.png"
        slogan={
          "Empowering Your Vision: Where Expertise Meets Innovation in Technical Activation"
        }
        paragraph={
          "Discover the difference with A Venture Studio's Technical Activation team, where expert knowledge and innovative thinking converge to transform your technological ambitions into reality. We're not just your service providers; we're your partners in driving success and innovation."
        }
      />
      <Steps
        slogan={
          "Never miss an opportunity to breathe fresh life into your business."
        }
        callToAction={`Connect with us now to gain exclusive access to the wealth of knowledge within our expert network.`}
      />
      <Partners />
      <Footer pageLink={"/technical"} />
    </motion.div>
  );
}
