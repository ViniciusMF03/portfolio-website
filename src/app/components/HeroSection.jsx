"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'


const HeroSection = () => {
  return (
    <section>
            <div className='grid drid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-700'>
                            Hello, I'm{" "}
                        </span>
                        <TypeAnimation
                            sequence={[
                            
                            'FredNerd',
                            1000, 
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'UI/UX Designer',
                            1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Atque dignissimos in id.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 via-green-600 to-green-700 hover:bg-slate-200 text-white'>
                            Hire me
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 via-green-600 to-green-700 hover:bg-slate-800 text-white mt-4'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/frogP-image.png"
                            alt='frog image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default HeroSection