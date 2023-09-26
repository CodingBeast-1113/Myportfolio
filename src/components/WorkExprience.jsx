import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
function WorkExprience() {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h1 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl '>Exprience</h1>
        <motion.div>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
        </motion.div>
    </div>
  )
}

export default WorkExprience