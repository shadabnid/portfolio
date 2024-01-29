import React from 'react'

const LetterGray = (props) => {
  return (
    <h1 className='text-[120px] font-[600] mobile:font-[650] mobile:text-[60px] mobile:tracking-[0px] tracking-[-8px] leading-[95px] uppercase text-[#a1a9b0]'>
        {props.letter}</h1>
  )
}

export default LetterGray