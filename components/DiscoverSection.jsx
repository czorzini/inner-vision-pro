import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";
import { HiVolumeUp } from "react-icons/hi";
import { ImVolumeMedium } from "react-icons/im";
import { MdVolumeUp } from "react-icons/md";
import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const DiscoverSection = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-10'>
                <div className="max-w-5xl mx-auto text-5xl my-24 flex flex-col gap-6">
                    <div className="text-3xl">Immersive sounds</div>
                    <div className="max-w-3xl font-bold text-[110px] leading-[100px]">Discover the power of natural beats.</div>
                    <p className='text-3xl'>
                        When we simply let our ears receive the music of the living nature, these miraculous, exquisite sounds can help us calm down and come back to our senses, instead of running away from them. <br />We can do it in our garden, at the beach, in the forest, or — as an immersive visualisation — we can listen to recordings and let visuals naturally appear in our mind’s eye.
                    </p>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto border-t border-b border-white/20 mb-10">
                <div className='max-w-7xl mx-auto w-full'>
                    <div className="grid md:grid-cols-2 gap-6 divide-x-[1px] divide-white/20">
                        <CardContainer className="flex justify-center items-center px-10 py-20">
                            <CardBody className="relative">
                                <Image className='opacity-60 object contain' src={`/image/music-bg.webp`} height={308} width={568} alt="Music Light Rain" />
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8">
                                    <CardItem translateZ={10} className="flex flex-col gap-2">
                                        <div className="text-3xl font-bold">Light Rain on Hollow Wood</div>
                                        <div className="text-2xl underline">Grégoire Chauvot</div>
                                    </CardItem>
                                    <div className="flex justify-between items-center">
                                        <CardItem translateZ={20} className="flex items-center gap-2">
                                            <HiVolumeUp className="text-3xl" />
                                            <div className="h-1 w-32 bg-white/50 rounded-3xl overflow-hidden relative before:absolute before:top-0 before:left-0 before:content-normal before:h-1 before:w-1/3 before:bg-white before:rounded-3xl"></div>
                                        </CardItem>
                                        {/* <HiPlay className="text-7xl" /> */}
                                        <CardItem translateZ={30} translateY={-2}><BsFillPlayCircleFill className="text-7xl" /></CardItem>
                                    </div>
                                    <CardItem translateZ={10} className="h-1.5 w-full bg-white/50 rounded-3xl overflow-hidden relative before:absolute before:top-0 before:left-0 before:content-normal before:h-1.5 before:w-1/2 before:bg-white before:rounded-3xl after:absolute after:top-0 after:left-0 after:content-normal after:h-1.5 after:w-2/5 after:bg-[#F6E53B] after:rounded-3xl"></CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                        <div className="flex justify-center items-center px-10 py-20">
                            <p className='text-2xl font-bold'>
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