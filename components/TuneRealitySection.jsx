'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { AppContext } from "./Providers";
import { SparklesCore } from "../components/ui/sparkles"

const TuneRealitySection = () => {
    const { isPlayerReady, setIsPlayerReady } = useContext(AppContext);

    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-6 md:mt-12'>
                <div className="w-full text-center font-bold text-[8.2vw] xl:text-[110px] xl:leading-[100px]">Tune in to Real <span className="relative after:absolute after:text-alpha after:text-[0.35em] after:-top-0.5 xl:after:-top-6 after:-right-2 md:after:-right-6 after:-translate-x-1/2 after:content-['TM']">Reality.</span></div>
                <div className='max-w-4xl mx-auto flex flex-col gap-8 justify-start items-start mt-10 md:mt-16 lg:mt-24'>
                    <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl">
                        Go beyond VR, AR, and all the mixed reality stuff.
                    </div>
                    {/* <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl">
                        Listen, we need no screens for this: <br /><span onClick={() => setIsPlayerReady(true)} className='underline cursor-pointer'>Close your eyes and open your soul.</span>
                    </div> */}
                    <div className="h-auto w-full bg-black flex flex-col overflow-hidden rounded-md">
                        <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl relative z-20">
                            Listen, we need no screens for this: <br /><span onClick={() => setIsPlayerReady(true)} className='underline cursor-pointer'>Close your eyes and open your soul.</span>
                        </div>
                        {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                            Aceternity
                        </h1> */}
                        <div className="w-[70vw] mx-auto h-16 sm:h-40 relative">
                            {/* Gradients */}
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 left-1/2 blur-sm" />
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 left-1/2 -translate-x-1/2" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 left-1/2 -translate-x-1/2 blur-sm" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 left-1/2 -translate-x-1/2" />

                            {/* Core component */}
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={1200}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />

                            {/* Radial Gradient to prevent sharp edges */}
                            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Image className='max-w-[1400px] mx-auto w-full h-auto object-contain' src={`/image/reality.webp`} height={850} width={1400} alt='Reality' />
        </>
    )
}

export default TuneRealitySection