import React from 'react';

function Background() {
  return (
    <>
      <div className='fixed h-screen w-full z-[2]'>
        <div className='flex justify-center text-[18px] font-semibold top-[8%] py-20 text-zinc-500'>
          Day 27 of #30DAYSCHALLENGE
        </div>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[14vh] leading-none tracking-tighter font-semibold text-zinc-400 font-gilroy'>
          Card Slider.
        </h1>
      </div>
    </>
  );
}

export default Background;
