import React from 'react'
import { motion } from 'framer-motion'


function Skill({icon}) {
  
  return (
     <div className='group relative flex cursor-pointer h-12 w-12 hover:scale-125'>
        <img 
        className='rounded-full ' src={icon} alt="" />   
     </div>
  )
}

export default Skill