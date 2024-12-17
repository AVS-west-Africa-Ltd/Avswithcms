import Image from "next/image"

export default function Promote({backgroundImage, slogan, paragraph}) {
  return (
    <div className='w-full h-full bg-black md:flex md:min-h-[900px]'>
        <div className='md:w-1/2 h-auto relative max-md:h-80'>
            <Image className="w-full h-full" src={backgroundImage} objectFit='cover' alt='' layout='fill' />
            <div className='w-full h-full absolute top-0 bg-gradient-to-t md:bg-gradient-to-l from-black to-transparent'>
                
            </div>
        </div>
        <div className='max-md:-translate-y-1/4 md:w-1/2 max-md:px-6 md:pr-10 lg:pr-20 md:pl-6 lg:pl-10 h-full my-auto max-md:pb-10 md:py-20 space-y-10 lg:space-y-20'>
            <h3 className='font-khand text-neutral-400 text-xl lg:text-3xl'>{slogan}</h3>
            <p className='font-thin text-white text-2xl md:text-4xl tracking-tight'>{paragraph}</p>
        </div>

    </div>
  )
}
