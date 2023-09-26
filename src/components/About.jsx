import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1
    }}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl  justify-evenly mx-auto items-center '>
        <h1 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl '>About</h1>
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1, x:0
        }}
        viewport={{
            once:true
        }}
        className='-mb-20 mt-10 md:mb-0  flex shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:mt-44' src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1686980006/WhatsApp_Image_2023-06-17_at_10.29.04_AM_kjfqlv.jpg" alt="" />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>
                Here is a {" "}<span className='underline decoration-[#F7AB0A]'>little</span>{" "} Background
            </h4>
            <p className='text-sm'>
             Hi, My name is Saurav , highly motivated and talented Web Developer with a good foundation in front-end and back-end web development. By experience i am fresher seeking an opportunity to contribute my skills and passion for web development to a dynamic and collaborative team. Skilled in designing, coding, and i have good problem solving skills and apart from this i have build some web projects which i have mentioned in my portfolio and resume
            </p>
        </div>
    </motion.div>
  )
}

export default About