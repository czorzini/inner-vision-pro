import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'


const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full md:p-4'>
            <div className="text-center text-alpha text-lg md:text-2xl mt-2 md:mt-6">Naturally</div>
            <CardContainer className='w-full -mt-2 md:-mt-10'>
                <CardBody className="w-full relative">
                    <CardItem translateZ="60" translateY={-5} className='w-full relative z-10'>
                        <Image className='mx-auto w-full max-w-5xl' src={`/image/hero.webp`} height={765} width={1207} alt='Inner Vision' />
                    </CardItem>
                    <CardItem translateZ="10" className="w-full font-bold text-center absolute bottom-6 md:bottom-10 lg:bottom-16 text-[14vw]  lg:text-[130px]">Inner Vision</CardItem>
                </CardBody>
            </CardContainer>

        </div>
    )
}

export default HeroSection