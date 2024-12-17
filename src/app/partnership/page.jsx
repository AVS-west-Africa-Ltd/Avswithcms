import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Promote from "../components/Promote";
import Steps from "../components/Steps";
import { whoWeAre } from "../data/whoWeAreData";
import Footer from "../components/Footer";
export default function Partnership() {
  console.log(whoWeAre[0]);
  return (
    <div className="w-full h-full">
      <Hero
        backgroundImage="/partnership/hero.webp"
        header="Strategy, Partnerships & Advisory"
        subHeader="Your Journey, Our Expert Support; Navigating Entrepreneurship with Ease"
        description={`We can help you build an agile leadership team, and help you become more flexible in assembling a collective of experts that allow you to scale and grow your business.`}
        description_2="The right people at the right time."
      />
      <AboutUs content={whoWeAre[0]} />
      <Promote
        backgroundImage="/partnership/promote.png"
        slogan={
          "Through Technology, Digital activation and product Conceptulisation!"
        }
        paragraph={
          "Our diverse set of partners and advisors provide a wide range of industry expertise and thought leadership to help you thrive in the fast paced world of innovation and entrepreneurship."
        }
      />
      <Steps
        slogan={
          "Never miss an opportunity to breathe fresh life into your business."
        }
        callToAction={`Connect with us now to gain exclusive access to the wealth of knowledge within our expert network.`}
      />
      <Partners />
      <Footer pageLink={"/partnership"} />
    </div>
  );
}
