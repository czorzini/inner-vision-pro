import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full p-4'>
            <div className='relative'>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-alpha text-2xl">Naturally</div>
                <div className='relative z-10'><Image className='mx-auto' src={`/image/hero.webp`} height={765} width={1207} alt='Inner Vision' /></div>
                <div className="w-full font-bold text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-[190px]">Inner Vision</div>
            </div>
        </div>
    )
}

export default HeroSection