import React from 'react'
import Cards from './Cards'
import { useRef } from 'react';

function Foreground() {
  const ref = useRef(null);
  const data=[
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
      fileSize:".4mb",
      close:false,
      tag:{isOpen:true,color:"green", tagTitle:"Download Now..."},
    },
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
      fileSize:"14mb",
      close:true,
      tag:{isOpen:true,color:"green", tagTitle:"Download Now..."},
    },
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
      fileSize:".6mb",
      close:false,
      tag:{isOpen:true,color:"blue", tagTitle:"Download Now..."},
    },
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
      fileSize:"5mb",
      close:true,
      tag:{isOpen:true,color:"green", tagTitle:"Download Now..."},
    },
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
      fileSize:"9mb",
      close:false,
      tag:{isOpen:true,color:"blue", tagTitle:"Download Now..."},
    },
  ]
  return (
    <>
      <div ref={ref} className='fixed h-full w-full z-[3] top-0 left-0 flex gap-5  flex-wrap p-10 '>
        {data.map((item, index)=>(
          <Cards data={item} reference={ref}/>
        ))}
      </div>
    </>
  )
}

export default Foreground
