import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Promote from "../components/Promote";
import { whoWeAre } from "../data/whoWeAreData";
import Steps from "../components/Steps";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
export default function Digital() {
  return (
    <div className="w-full h-full">
      <Hero
        backgroundImage={"/digital/hero.webp"}
        header={"Brand & Digital Activation"}
        subHeader={
          "Your Brand, It’s Exposure; Reaching the Right Audience With the Best Message."
        }
        description={
          "Our network will ensure you increase MRR through exposure on the best digital means, putting your brand in front of eyeballs and that increases the value of your business, with purchase habits, analytics and tangible ROI insights."
        }
        description_2={"The right people at the right time."}
      />
      <AboutUs content={whoWeAre[2]} />
      <Promote
        backgroundImage="/digital/promote.png"
        slogan={
          "Your product's success hinges on effective branding and activation strategies. Invest your budget wisely."
        }
        paragraph={
          "With our tailored expertise, we ensure every penny spent drives impactful brand activation, propelling your product towards success in today's competitive market.  Utilise the platforms that will work best for your business and maximise your brand's reach."
        }
      />
      <Steps
        slogan={
          "Never miss an opportunity to breathe fresh life into your business."
        }
        callToAction={`Connect with us now to gain exclusive access to the wealth of knowledge within our expert network.`}
      />
      <Partners />
      <Footer pageLink={"/digital"} />
    </div>
  );
}
