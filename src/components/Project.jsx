import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons';

function Project() {
 
  const Projects = [

    {
      name: "E-commerce Site",
      image: "https://res.cloudinary.com/dvcwh1gaq/image/upload/v1686980579/Screen_Shot_2023-06-17_at_11.12.09_o1axvv.png",
      gitlink:"https://github.com/CodingBeast-1113/Mern-Ecommerce",
      url:"https://lonely-blue-toga.cyclic.app/",
      about:"Developed a Ecommerce website for shopping different items. In which registration and login functionality is added. After login user can buy or add items in cart . Payment functionality is also there. "
    }
    
  ]

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 space-y-10 '>
      <h1 className='uppercase absolute top-24  tracking-[20px] text-gray-500 text-2xl'>Projects</h1>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:mt-28 '>
        {Projects.map((project) => (
          <div className=' w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>  
            <a href={project.url}><motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='md:h-52 rounded-lg'
              src={project.image}
              alt="" /></a>

            <div className='space-y-2 px-0 md:px-10 max-w-6xl'>
              <div className='flex justify-center items-center'>
                <SocialIcon className='hover:scale-150 ' url={project.gitlink}
                  fgColor='gray'
                  bgColor='transparent' />
                <a href={project.url}><img className='w-8 h-8 mr-2 opacity-75 hover:scale-150 ' src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1685947559/link_owvsrd.png" alt="" /></a>
  
              </div>
              <h4 className='text-2xl font-semibold text-center'> <span className='underline decoration-[#F7AB0A]/50'>{project.name}</span>
                </h4>
              <p className=' text-center  md:px-10 max-w-7xl'>{project.about}</p>
            </div> 
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12'>
      </div>
     
    </div>
  )
}

export default Project