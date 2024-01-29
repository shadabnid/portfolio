import React from 'react'

const About = () => {
    return (
        <div className=' flex flex-col text-[#FFF] justify-center mobile:block  p-[3rem] h-[60vh] mobile:h-auto bg-[#E04343]'>
            <div>
            <h1 className=' text-[2rem] mobile:text-[1rem] font-[Open Sans,sans-serif] uppercase tracking-[0.25rem] font-bold pb-[1.875rem] text-center'>A Little <span className='text-yellow-400'>About</span> me</h1>
            </div>
            <div className='px-[5rem]  mobile:px-[0px]'>
            <p className='font-[Open Sans,sans-serif] mobile:text-center mobile:flex'>
                I am Shadab Hussain, a motivated Master of Computer Application (MCA) student at the National Institute of Technology, Jamshedpur, and an alumnus of Jamia Millia Islamia with a degree in Applied Mathematics. Proficient in C, C++, and JavaScript, I specialize in web technologies including ReactJs, NodeJs, and ExpressJs. My skill set encompasses HTML, CSS, MySQL, MongoDB, along with proficiency in tools like VS Code and Postman. With a solid foundation in data structures, algorithms, and object-oriented programming, I am enthusiastic about contributing to innovative and impactful projects. Connect with me on LinkedIn
            </p>
            </div>
        </div>
    )
}

export default About