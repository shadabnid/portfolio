import React from 'react'

const LetterRed = (props) => {
  return (
<h1 className='text-[120px] font-[600] mobile:font-[650] mobile:text-[60px] mobile:tracking-[0px] tracking-[-8px] leading-[95px] uppercase text-[#E04343]'>
        {props.letter}</h1>
  )
}

export default LetterRed