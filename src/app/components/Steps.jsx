
import Link from "next/link"
import { steps } from "../data/stepsData"
export default function Steps({slogan, callToAction}) {
  return (
    <div className="bg-black">
        <div className="text-white max-md:pt-2 max-md:pb-40 max-md:px-6 md:p-20 lg:p-40 text-white text-center space-y-10">
            <p className="text-xl lg:text-2xl xl:text-3xl font-semibold lg:w-4/5 xl:w-2/5 mx-auto">{slogan}</p>
            <p className="font-light text-4xl lg:text-5xl xl:text-6xl">{callToAction}</p>
        </div>
        <div className="w-full h-full">
            <div className="md:flex px-6 py-20">
                {steps.map((step, index) => (
                    <div className="group max-sm:w-[300px] max-md:w-[420px] max-md:mx-auto md:w-1/4 h-80 max-md:border-t-[0.5px] md:border-l-[0.5px] border-stone-300 relative " key={`steps_${index}`}>
                        <div className="absolute top-0 h-full w-full transtion-opacity duration-700 opacity-0 group-hover:opacity-100 bg-gradient-to-l from-stone-500 to-[#64826F]"></div>
                            <div className="z-10 absolute top-0  h-full w-full flex">
                                <div className="px-4 m-auto space-y-4">
                                    <span className="font-khand text-lg text-stone-300 font-medium">Step {index + 1}</span>
                                    <div className="space-y-2 text-white">
                                        <h4 className="text-lg font-semibold">{step.title}</h4>
                                        <p className="font-medium text-sm">{step.description}</p>
                                    </div>
                                    <div>
                                        <Link href='/contact' className="text-black group-hover:bg-white text-lg font-semibold px-4 py-2 transition duration-1000">{step.buttonText}</Link>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>

    </div>
  )
}
