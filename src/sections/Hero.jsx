import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
                Hi, I'm Ars <span className='waving-hand'>👋</span>
            </p>
            <p className="hero_tag
            text-gray_gradient">Building Future Together</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            
        </div>
    </section>
  )
}

export default Hero
