import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'


const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full p-4'>
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