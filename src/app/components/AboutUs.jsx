import Link from "next/link";
export default function AboutUs({ content }) {
  return (
    <div className="bg-stone-300 w-full h-full flex flex-col">
      <div className=" px-6 md:px-20 py-6 md:py-6 border-b-[0.5px] border-stone-500">
        <h2 className="text-neutral-400 font-khand text-xl md:text-3xl">
          Who we are?
        </h2>
      </div>
      <div className="max-md:px-6 max-md:py-20 md:p-20 xl:w-[1220px] my-auto space-y-8 md:space-y-20">
        <h3 className=" text-4xl md:text-7xl text-stone-500 font-semibold">
          {content.slogan}
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:space-y-0 space-y-5 text-neutral-800">
          {content.paragraphs.map((paragraph, index) => (
            <p
              className="md:min-w-1/3 md:max-w-1/3 lg:max-w-1/4 lg:min-w-1/4"
              key={`who_we_are_0_${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <br />
        <Link
          href="/contact"
          className="bg-white text-black text-sm md:text-2xl p-2 md:p-3 md:mt-10  hover:bg-black hover:text-white transition duration-1000 hover:border-[0.5px]"
        >
          Meet Us
        </Link>
      </div>
    </div>
  );
}
