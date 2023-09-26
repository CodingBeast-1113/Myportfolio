import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}

     className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  '>
        <h1 className=' uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl '>skills</h1>
        <div className='grid grid-cols-4 gap-10 gap-x-20 mr-14'> 
       <Skill icon = "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"/>
       
       <Skill icon ="https://e7.pngegg.com/pngimages/123/816/png-clipart-computer-icons-java-%E5%92%96%E5%95%A1%E6%B5%B7%E6%8A%A5%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90-miscellaneous-text.png"/>

       <Skill icon="https://www.citypng.com/public/uploads/preview/download-html5-round-logo-icon-png-116622246089xqzopcuvg.png"/>

       <Skill icon="https://cdn-icons-png.flaticon.com/512/919/919826.png"/>

       <Skill icon="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"/>

       <Skill icon="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"/>

       <Skill icon="https://viget.imgix.net/tailwind-on-gray.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1280&ixlib=php-2.1.1&q=90&w=1280&s=c59bb939dcc8298544a1300e6c43673c"/>

       <Skill icon="https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"/>

       <Skill icon="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"/>

       <Skill icon="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"/>
       
       <Skill icon="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"/>
    
       <Skill icon="https://e7.pngegg.com/pngimages/669/447/png-clipart-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-thumbnail.png"/>
       </div>
    </motion.div>
  )
}  

export default Skills