import React, { useState } from 'react'
import LetterBlack from './subcomponent/LetterBlack'
import LetterYellow from './subcomponent/LetterYellow'
import LetterGray from './subcomponent/LetterGray'
import LetterRed from './subcomponent/LetterRed'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ReactTyped } from "react-typed";
import Navbar from './Navbar'
const Home = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = (toggle)=>{
        setToggle(toggle);
    }

    return (
        <div className='flex flex-col justify-center items-center h-[80vh] pt-[3rem] m-0 border-red-500 bg-[#FBFBFB] '>
              {toggle?<Navbar toggle={toggle}/>:(null)}
             <div className='fixed z-10  left-[1.7rem] top-[1.5rem] p-[0.2rem] bg-white'>
            {toggle ?
                <IoMdClose onClick={()=>handleClick(!toggle)} className='text-4xl cursor-pointer text-[#E04343]' />
                :
                <GiHamburgerMenu onClick={()=>handleClick(!toggle)} className='text-4xl cursor-pointer text-[#E04343]' />
            }
          </div>
        <div className='flex justify-end fixed top-[-40px] z-[-1] items-center w-[100vw] px-[2.5rem]  bg-gray-500 border-b border-[#E04343]'></div>
            <div className='flex'>
                <LetterBlack letter={'s'} />
                <LetterBlack letter={'h'} />
                <LetterRed letter={'a'} />
                <LetterBlack letter={'d'} />
                <LetterRed letter={'a'} />
                <LetterBlack letter={'b'} />

            </div>
            <div className='flex mobile:mt-[-30px]'>
                <LetterGray letter={'h'} />
                <LetterGray letter={'u'} />
                <LetterYellow letter={'s'} />
                <LetterYellow letter={'s'} />
                <LetterGray letter={'a'} />
                <LetterGray letter={'i'} />
                <LetterGray letter={'n'} />


            </div>
            <div>
            <ReactTyped className='text-[20px] mobile:text-[13px] mobile:tracking-[5px] mobile:leading-[1px] font-[500]  text-[#E04343] tracking-[18px] leading-[50px] uppercase'
      strings={[
        "Front End Developer",
        "back end Developer",
        "full stack Developer",
      ]}
      typeSpeed={120}
      backSpeed={50}
      
      loop
    />
            </div>
        </div>
    )
}

export default Home