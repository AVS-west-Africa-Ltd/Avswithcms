"use client";
import Link from 'next/link';
import Header from './Header';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ header, subHeader, description, description_2, backgroundImage }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -1000 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className='w-full h-full bg-black relative overflow-hidden'>
      <div className='z-40 absolute w-full'>
        <Header />
      </div>

      <motion.div
        className='bg-cover relative bg-no-repeat z-2'
        variants={container}
        initial='hidden'
        animate='show'
        // style={{ backgroundImage: `url('${backgroundImage}')`, backgroundPosition: 'center 0', zIndex: 1 }}
      >
        <Image
          alt='background'
          src={backgroundImage}
          placeholder='blur'
          quality={80}
          priority={true}
          fill
          sizes='100vw'
          className='object-cover absolute top-0 -z-4'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAkklEQVR42mP8/wfg/2FJLP0/OeHc5s+YtQWsZiYmJysrCwEAAwAB/1ER6wAAAABJRU5ErkJggg=='
        />

        <div className='w-full h-full bg-gradient-to-t from-black px-6 md:px-20 py-20 md:py-40 lg:pt-80 lg:pb-40 z-20 relative'>
          <motion.div variants={item} className='md:w-2/3 text-white relative'>
            <h1 className='font-khand'>{header}</h1>
            <p className='text-4xl lg:text-5xl'>{subHeader}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className='bg-black w-full h-full md:pt-40'>
        <div className='max-md:px-6 lg:w-[800px] text-white mx-auto text-center space-y-4 md:space-y-10 pb-20 md:pb-60 max-md:bg-gradient-to-t from-black to-transparent'>
          <p className='md:text-xl font-light'>{description}</p>
          <p className='font-semibold text-2xl md:text-4xl'>{description_2}</p>
          <div>
            <Link href='/contact' className='bg-white text-black text-sm md:text-2xl p-2 md:p-5 hover:bg-black hover:text-white transition duration-1000 hover:border-[0.5px]'>
              Let's Connect Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
