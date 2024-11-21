import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
   <div className='flex justify-center gap-72 items-center w-full h-screen'>
    <div>
        <div className='text-4xl font-bold'>Ethan Duan</div>
        <div className='text-xl font-light'>Frontend Engineer</div>
    </div>
    <div className='w-64 h-64 relative'>
      <div className='rotate-12 w-6 h-6 text-orange-300 scale-[3] absolute right-16 top-11'>
        <FontAwesomeIcon icon={faCrown} bounce />
      </div>
      <Image
          src="/meimeiAvatar.png"
          alt="My cute boy"
          className='rounded-full'
          width={256}
          height={256}
          />
    </div>
   </div>
  );
}
