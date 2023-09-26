import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import {FcDownload} from 'react-icons/fc'
function Header() {
  return (
    <header className='sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center '>
    
    {/* social icons */}
    
  <motion.div 
    initial = {{
        x: -500,
        opacity:0,
        scale:0.5
      }}
    animate={{
      x:0,
      opacity:1,
      scale:1
    }}
    transition={{
      duration:1.5
    }}
    className='flex flex-row items-center '>
      {/* <SocialIcon url="https://twitter.com/sagarkarotia" 
      fgColor='gray' 
      bgColor='transparent'/> */}
      {/* <SocialIcon url="https://www.instagram.com/sagarkarotia/" 
      fgColor='gray'   
      bgColor='transparent'/> */}
      <SocialIcon url="https://github.com/CodingBeast-1113" 
      fgColor='gray'
      bgColor='transparent'/>
      <SocialIcon url="https://www.linkedin.com/in/saurav-kumar-70536b241" 
      fgColor='gray'
      bgColor='transparent'/>
     
  </motion.div>
  
{/* email icon */}

  <motion.div 
     initial = {{
      x: 500,
      opacity:0,
      scale:0.5
    }}
  animate={{
    x:0,
    opacity:1,
    scale:1
  }}
  transition={{
    duration:1.5
  }}
    className='flex flex-row items-center space-x-2'>    
    {/* <a href="https://drive.google.com/file/d/1ZQxvrnWoW6-2ZgXev3VIZxb_6K5JXAN6/view?usp=sharing"> 
      <FcDownload  className='rounded-md h-6 w-9 animate-bounce'/></a> */}
     <a href="mailto:Sk8882909609@gmail.com"> 
     <SocialIcon 
      className='curser-pointer'
      network='email'
      fgColor='gray'
      bgColor='transparent'
      />
      <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
      </a>
      
    </motion.div>
    </header>
  )
}
export default Header