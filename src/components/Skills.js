import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='flex flex-col p-[5rem] justify-center items-center'>
            <h1 className='text-[1.3rem] mobile:text-[13px] mobile:text-center text-[#353535] uppercase  tracking-[0.25rem] font-bold font-[Open Sans,sans-serif]'>As a student, achieving excellence</h1>
            <div className='flex flex-wrap gap-[4rem] mobile:gap-0 mobile:flex-col mt-[5rem]'>
                <div className='flex flex-col justify-center items-center'>

                    <div className='flex justify-center items-center rounded-[50%] w-[150px] h-[150px] border-[1px] border-[#E04343]'>
                        <SiMongodb className='text-[56px] transition-transform duration-500 ease-in-out transform hover:scale-[2] text-[#E04343]' />
                    </div>
                    <h2 className='text-[1.5em] uppercase font-bold text-[#353535] mt-[0.83em]'>MongoDB</h2>
                </div>
                <div className='flex flex-col justify-center items-center'>

                    <div className='flex justify-center items-center rounded-[50%] w-[150px] h-[150px] border-[1px] border-[#E04343]'>
                        <SiExpress className='text-[56px] transition-transform duration-500 ease-in-out transform hover:scale-[2] text-[#E04343]' />
                    </div>
                    <h2 className='text-[1.5em] uppercase font-bold text-[#353535] mt-[0.83em]'>Express js</h2>

                </div>
                <div className='flex flex-col justify-center items-center'>

                    <div className='flex justify-center items-center rounded-[50%] w-[150px] h-[150px] border-[1px] border-[#E04343]'>
                        <FaReact className='text-[56px] transition-transform duration-500 ease-in-out transform hover:scale-[2] text-[#E04343]' />
                    </div>
                    <h2 className='text-[1.5em] uppercase font-bold text-[#353535] mt-[0.83em]'>react js</h2>

                </div>
                <div className='flex flex-col justify-center items-center'>

                    <div className='flex justify-center items-center rounded-[50%] w-[150px] h-[150px] border-[1px] border-[#E04343]'>
                        <FaNode className='text-[56px] transition-transform duration-500 ease-in-out transform hover:scale-[2] text-[#E04343]' />
                    </div>
                    <h2 className='text-[1.5em] uppercase font-bold text-[#353535] mt-[0.83em]'>node js</h2>

                </div>

            </div>
        </div>
    )
}

export default Skills