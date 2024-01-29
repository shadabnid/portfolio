import React from 'react'

import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";



const Navbar = (props) => {
    return (


        <div className={`bg-white w-[100%] mobile:h-[100vh] border-b fixed top-0 ${props.toggle}?'left-[-100%]':'left-[100%]'} transition-transform duration-3000 ease-linear transform  border-[#E04343] px-[2.5rem] py-[2.5rem]` }>
            <ul className='flex gap-10 justify-end mobile:flex-col mobile:mt-[24px]'>
                <div className='flex flex-col justify-center items-center'>
                    <div><FaHome className='text-2xl text-[#353535]' /></div>
                    <div className='font-[Open Sans,sans-serif] text-[#353535] uppercase tracking-[0.0625rem] text-[0.7rem] font-[600] pt-[0.5em]'>Home</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div><FaBookOpen className='text-2xl text-[#353535]' /></div>
                    <div className='font-[Open Sans,sans-serif] text-[#353535] uppercase tracking-[0.0625rem] text-[0.7rem] font-[600] pt-[0.5em]'>About</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div><GiSkills className='text-2xl text-[#353535]' /></div>
                    <div className='font-[Open Sans,sans-serif] text-[#353535] uppercase tracking-[0.0625rem] text-[0.7rem] font-[600] pt-[0.5em]'>Skills</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div><RiContactsFill className='text-2xl text-[#353535]' /></div>
                    <div className='font-[Open Sans,sans-serif] text-[#353535] uppercase tracking-[0.0625rem] text-[0.7rem] font-[600] pt-[0.5em]'>Service</div>
                </div>
            </ul>
        </div>






    )
}

export default Navbar