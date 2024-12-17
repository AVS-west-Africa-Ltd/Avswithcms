import Image from "next/image";
import Link from "next/link";
export default function Footer({ pageLink }) {
  const pages = [
    {
      title: "Partnerships, Advisory & Investment ",
      image: "/partnership/hero.png",
      link: "/partnership",
    },
    {
      title: "Technical Activation",
      image: "/technical/hero.png",
      link: "/technical",
    },
    {
      title: "Brand & Digital Activation ",
      image: "/digital/hero.png",
      link: "/digital",
    },
  ];
  return (
    <div
      className="bg-black text-white pt-10 md:pt-20 px-4 md:px-20"
      style={{ backgroundImage: `url(${"/graphic.png"})` }}
    >
      <div className="w-full m-auto space-y-10 relative">
        <Image
          className="px-16 mx-auto object-contain"
          width={300}
          height={200}
          src="/Logo2.png"
          alt="a venture studio logo"
        />

        <div className="lg:flex max-lg:space-y-4 lg:space-x-4 w-full">
          {pages.map((page, index) => {
            if (pageLink === page.link) {
              return null; // Skip rendering this link
            }

            return (
              <div
                key={`footer_page_${index}`}
                className="bg-black hover:bg-opacity-100 hover:animate-pulse group  bg-opacity-20 w-full h-full"
              >
                <Link href={page.link} className="py-4">
                  <div className="border-[0.5px] border-neutral-500 flex group-hover:border-white">
                    <div className="relative h-20 md:h-40 w-1/3 sm:w-1/2 ">
                      <Image
                        src={page.image}
                        alt={page.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="bg-gradient-to-l from-black absolute top-0 w-full h-full z-2"></div>
                    </div>
                    <div className="w-2/3 sm:w-1/2 flex no-wrap justify-between">
                      <div className="my-auto">
                        <p className="text-neutral-400 font-khand text-xs md:text-sm">
                          Looking for
                        </p>
                        <h4 className="font-semibold md:text-lg">
                          {page.title}
                        </h4>
                      </div>

                      <span className="my-auto pr-2 md:pr-4">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center space-y-2 py-6">
          <p className="font-khand text-grey md:text-xl">Contact Us At</p>

          <p className="md:text-lg">
            <a
              href="mailto:jt@aventurestud.io"
              className="text-center mx-auto hover:underline"
            >
              hello@aventurestud.io
            </a>
          </p>
        </div>
        <ul className="flex text-center text-sm pb-8 md:pb-2">
          <li className="m-auto">Privacy Policy</li>
          <li className="m-auto">Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
}
