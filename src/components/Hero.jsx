import React from 'react'
import BackgroundCircle from './BackgroundCircle'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi,My name is Saurav",
            "i'm am web-Developer",
            "<i-do-Code-Everyday/>"
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <BackgroundCircle />
            <img className='relative rounded-full h-32 w-32  mx-auto object-cover'
                src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1686980005/WhatsApp_Image_2023-06-17_at_10.27.22_AM_vxgjtz.jpg" alt="" />

            <div className='z-20'>
                <h1 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h1>
                <h1>
                    <span className='text-3xl lg:text-5xl font-semibold px-10' >{text}</span>
                    <Cursor CursorColor="#F7AB0A" />
                </h1>
                <div className='pt-5'>
                    <a href="#about"><button className='heroButton hover:outline-double'>About</button></a>
                    {/* <button className='heroButton  hover:outline-double'>Experience</button> */}
                    <a href="#skills"><button className='heroButton hover:outline-double'>Skills</button></a>
                    <a href="#projects"><button className='heroButton hover:outline-double'>Projects</button></a>
                </div>
            </div>
        </div>
    )
}

export default Hero