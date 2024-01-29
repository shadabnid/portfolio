import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='h-[80vh] mobile:h-[200vh] flex flex-col justify-center items-center  bg-[#E04343]'>
        <h2 className=' text-[#FFF] mobile:text-[13px] text-[2rem] font-[Open Sans,sans-serif] uppercase tracking-[0.25rem] font-bold mt-[1rem]'>
        Contact Information
        </h2>
        <div className='flex  flex-wrap gap-[3rem] mobile:flex-col mobile:gap-[20px] mobile:ml-[12px]  mt-[4rem]'>
            <div className='flex flex-col justify-center items-center w-[300px] h-[200px] bg-[#FBFBFB]'>
                <div><FaLocationDot className='text-[#545454]'/></div>
                <div className='text-[#545454] text-[14px] font-bold mt-[15px] uppercase translate-[1px]'>Address</div>
                <div className='text-[#8c9398] text-[14px] text-[100] leading-[28xp] mt-[30px] font-bold'>Delhi</div>
            </div>
            <div className='flex flex-col justify-center  items-center w-[300px] h-[200px] bg-[#FBFBFB]'>
                <div><FaPhoneAlt className='text-[#545454]'/></div>
                <div className='text-[#545454] text-[14px] font-bold mt-[15px] uppercase translate-[1px]'>phone</div>
                <div className='text-[#8c9398] text-[14px] text-[100] leading-[28xp] mt-[30px] font-bold'>+919312163356</div>
            </div>
            <div className='flex flex-col justify-center  items-center w-[300px] h-[200px] bg-[#FBFBFB]'>
                <div><MdEmail className='text-[#545454]'/></div>
                <div className='text-[#545454] text-[14px] font-bold mt-[15px] uppercase translate-[1px]'>email</div>
                <div className='text-[#8c9398] text-[14px] text-[100] leading-[28xp] mt-[30px] font-bold'>shadabnid@gmail.com</div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact