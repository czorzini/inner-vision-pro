'use client'

import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { AppContext } from "./Providers";

const DiscoverSection = () => {
    const { isPlayerReady, setIsPlayerReady, playing, setPlaying } = useContext(AppContext);

    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-10'>
                <div className="max-w-5xl mx-auto mt-10 md:my-24 flex flex-col gap-3 md:gap-5">
                    <div className="text-base md:text-xl lg:text-2xl">Immersive sounds</div>
                    <div className="max-w-3xl font-bold text-5xl md:text-7xl lg:text-[100px] lg:leading-[100px]">Discover the power of <span className="text-alpha">natural beats.</span></div>
                    <p className='text-lg md:text-2xl lg:text-3xl'>
                    When we simply let our ears receive the music of the living nature, these miraculous, exquisite sounds can help us calm down and come back to our senses, instead of running away from them into some virtual world. <br /><br />We can practice in our garden, at the beach, in the forest, or — as an immersive visualisation — <Link href={`https://earth.fm`} target="_blank" className="underline">listen to these recordings</Link> and let visuals naturally appear in our mind’s eye.
                    </p>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto lg:border-t lg:border-b border-white/20 mb-10">
                <div className='max-w-7xl mx-auto w-full'>
                    <div className="grid lg:grid-cols-2 gap-2 lg:gap-6 divide-x-[1px] divide-white/20">
                        <CardContainer className="flex justify-center items-center px-5 lg:px-10 pt-8 pb-5 lg:py-20">
                            <CardBody className="relative cursor-pointer">
                                <Image className='opacity-60 object contain' src={`/image/music-bg.webp`} height={308} width={568} alt="Music Light Rain" />
                                <div onClick={() => { setIsPlayerReady(true); setPlaying(true) }} className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-8">
                                    <CardItem translateZ={10} className="flex flex-col gap-2">
                                        <div className="text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold">Light Rain on Hollow Wood</div>
                                        <div className="text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl underline opacity-80">Grégoire Chauvot</div>
                                    </CardItem>
                                    <div className="flex justify-between items-center">
                                        <CardItem translateZ={30} className="flex items-center gap-2">
                                            <HiVolumeUp className="text-2xl sm:text-3xl" />
                                            <div className="h-1 w-32 bg-white/50 rounded-3xl overflow-hidden relative before:absolute before:top-0 before:left-0 before:content-normal before:h-1 before:w-1/3 before:bg-white before:rounded-3xl"></div>
                                        </CardItem>
                                        <CardItem translateZ={30} translateY={-2}><BsFillPlayCircleFill className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl" /></CardItem>
                                    </div>
                                    <CardItem translateZ={10} className="h-1.5 w-full bg-white/50 rounded-3xl overflow-hidden relative before:absolute before:top-0 before:left-0 before:content-normal before:h-1.5 before:w-1/2 before:bg-white before:rounded-3xl after:absolute after:top-0 after:left-0 after:content-normal after:h-1.5 after:w-2/5 after:bg-[#F6E53B] after:rounded-3xl"></CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                        <div className="flex justify-center items-center px-5 lg:px-10 pt-5 pb-8 lg:py-20">
                            <p className='text-lg md:text-2xl lg:text-3xl font-bold'>
                                Listening to nature and listening to ourselves are not two different things.
                                Actually, opening up our <span className='text-alpha'>innate awareness</span> to the sounds of nature has been proven to be extremely beneficial for our mental and emotional wellbeing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DiscoverSection