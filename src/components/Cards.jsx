import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative w-60 h-72 rounded-[50px] bg-slate-400 py-10 px-8 text-[25px] overflow-hidden'>
        <span className='cursor-pointer '>
        <FaFileLines/>
        </span>
        <p className='text-[20px] leading-none font-semibold pt-3 '>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0'>
            <div className='flex items-center justify-between mb-5 text-black font-semibold px-10 text-[20px]'>
                <h5>{data.fileSize}</h5>
                <span className='h-8 w-8 bg-sky-200 rounded-full flex items-center justify-center  py-3 cursor-pointer '>
                   {data.close ? <AiOutlineClose/> : <TbDownload/>}
                    
                </span>
            </div>
            {data.tag.isOpen ? (
              <div className={`tag w-full h-16 font-medium text-cyan-500 text-[20px] flex items-center px-10 ${data.tag.color === "green" ? "bg-cyan-900" : "bg-indigo-900" }  cursor-pointer`}>{data.tag.tagTitle}</div> 
            ) : null}
        </div>
    </motion.div>
  )
}

export default Cards
