import React from 'react'

const LetterYellow = (props) => {
  return (
    <h1 className='text-[120px] font-[600] mobile:font-[650] mobile:text-[60px] mobile:tracking-[0px] tracking-[-8px] leading-[95px] uppercase text-[#FFE800]'>
    {props.letter}</h1>
  )
}

export default LetterYellow