import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Logo = () => {
  return (
    <div className='w-full h-full'>
        <Link href='/'>
            <Image width={150} height={20} className='w-full h-full object-contain' src='/logo.png' alt="Logo" />
        </Link>
    </div>
  );
};

export default Logo;
