import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'


const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full p-4'>
            <div className="text-center text-alpha text-2xl mt-6">Naturally</div>
            <CardContainer className='w-full -mt-10'>
                <CardBody className="relative">
                    <CardItem translateZ="60" translateY={-5} className='relative z-10'><Image className='mx-auto max-w-5xl' src={`/image/hero.webp`} height={765} width={1207} alt='Inner Vision' /></CardItem>
                    <CardItem translateZ="10" className="w-full font-bold text-center absolute bottom-10 text-[130px]">Inner Vision</CardItem>
                </CardBody>
            </CardContainer>

        </div>
    )
}

export default HeroSection