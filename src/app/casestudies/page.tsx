import React from "react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const caseStudies = [
  {
    title: "Jack & Able | Flipify x Untapped x AVS",
    service: "Technical Activation",
  },
  {
    title: "Rollr | Plantec x Covve x AVS",
    service: "Strategy, Advisory and Investment",
  },
  {
    title: "AVS West Africa x 9th Grid",
    service: "Strategy",
  },
  {
    title: "AVS West Africa x SMS Protect",
    service: "Advisory",
  },
  {
    title: "Whisc | AVS",
    service: "Strategy, Advisory and Investment",
  },
  {
    title: "Covve | AVS x Home Grown Club",
    service: "Digital Activation",
  },
  {
    title: "Yalla Cooperative | AVS x Get Over Yourself",
    service: "Strategy and Digital Activation",
  },
  {
    title: "One Touch Football | AVS",
    service: "Advisory and Strategy",
  },
  {
    title: "Team Sportz | AVS",
    service: "Strategy and Advisory",
  },
  {
    title: "Untapped | AVS",
    service: "Strategy and Advisory",
  },
  {
    title: "Flipify Media | AVS",
    service: "Strategy and Advisory",
  },
  {
    title: "The Platform | Plantec x Flipify x AVS",
    service: "Technical Activation",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-black flex flex-col w-screen h-full">
      <div className=" md:absolute top-0 h-20 p-4 pl-6 md:pl-20 w-40 md:w-60">
        <Logo />
      </div>
      <div className="text-white px-6 md:px-20 py-10 md:py-40">
        <h1 className="font-khand">Our Case Studies</h1>
        <h2 className="md:text-4xl text-2xl w-2/3">
          Explore how AVS has helped organizations with tailored strategies,
          advisory, and technical activation services.
        </h2>
      </div>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {caseStudy.title}
              </h3>
              <p className="mt-2 text-gray-600">{caseStudy.service}</p>

              <div className="mt-4">
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer pageLink={undefined} />
    </div>
  );
};

export default CaseStudies;
