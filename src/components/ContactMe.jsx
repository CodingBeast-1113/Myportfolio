import React from 'react'
import {PhoneIcon , MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
function ContactMe() {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-32 '>

            <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>contact</h3>

            <div className='flex flex-col space-y-10  '>
                <h4 className='text-2xl  font-semibold text-center'><span className='underline decoration-[#F7AB0A]/50 '>Let's talk</span></h4>

                <div className='space-y-5 '>
                  <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                     <p>+91-9310783658</p>
                  </div>

                  <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                     <p>Sk8882909609@gmail.com</p>
                  </div>

                  <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                     <p>faridabad,Haryana</p>
                  </div>

              </div>
                <form className='flex flex-col space-y-2 w-auto mx-auto' action='https://formspree.io/f/xdovrdjo' method='POST'>
                    <div className='flex space-x-2'>
                        <input className='contactInput w-40' type="text" name='username' placeholder='Name' required/>   
                        <input className='contactInput w-40' type="email" name='Email' placeholder='Email' required />
                    </div>
                    <input className='contactInput' name='subject' type="text" placeholder='Subject'/>
                    <textarea className='contactInput ' placeholder='Message' name='message'></textarea>
                    <button className='bg-[#F7AB0A] py-5 px-10 rounded-sm  text-black font-bold text-lg'>Submit</button>
                </form>
            </div> 
        </div>
    )
}

export default ContactMe