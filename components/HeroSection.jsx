import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'


const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full p-4'>
            {/* <div className='relative'>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-alpha text-2xl">Naturally</div>
                <div className='relative z-10'><Image className='mx-auto' src={`/image/hero.webp`} height={765} width={1207} alt='Inner Vision' /></div>
                <div className="w-full font-bold text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-[190px]">Inner Vision</div>
            </div> */}
            <CardContainer className='w-full'>
                <CardBody className="relative">
                    <CardItem translateZ="90" className="absolute top-8 left-1/2 text-alpha text-2xl">Naturally</CardItem>
                    <CardItem translateZ="60" translateY={-5} className='relative z-10'><Image className='mx-auto max-w-5xl' src={`/image/hero.webp`} height={765} width={1207} alt='Inner Vision' /></CardItem>
                    <CardItem translateZ="10" className="w-full font-bold text-center absolute bottom-10 text-[130px]">Inner Vision</CardItem>
                </CardBody>
            </CardContainer>

        </div>
    )
}

export default HeroSection