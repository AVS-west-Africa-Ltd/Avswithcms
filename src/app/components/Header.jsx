import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full flex justify-between px-2 md:px-6 md:px-20 max-sm:space-x-2 absolute">
      <div className="w-28 xs:w-40 sm:w-40 md:w-60 h-20 relative">
        <Link href="/">
          <Image
            src="/logo.png"
            fill
            objectFit="contain"
            alt="Venture Studio"
          />
        </Link>
      </div>
      <div className="my-auto max-xs:text-xs">
        <a href="/casestudies" class="md:px-4 text-sm md:text-lg">
          Our case studies
        </a>
      </div>
      <div className="my-auto max-xs:text-xs">
        <a
          href="mailto:jt@aventurestud.io?subject=Interested%20in%20becoming%20an%20Partner"
          class="bg-[#FFFFFF] text-black py-2 px-2 md:px-4 text-sm md:text-lg"
        >
          Become a partner/advisor
        </a>
      </div>
    </div>
  );
}
