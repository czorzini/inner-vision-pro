'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "./Providers";

const TuneRealitySection = () => {
    const { isPlayerReady, setIsPlayerReady, playing, setPlaying } = useContext(AppContext);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true)
    }, [])

    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 my-6 md:my-12'>
                <div className="w-full text-center font-bold text-[8.2vw] xl:text-[110px] xl:leading-[100px]">Tune in to Real <span className="relative after:absolute after:text-alpha after:text-[0.35em] after:-top-0.5 xl:after:-top-6 after:-right-2 md:after:-right-6 after:-translate-x-1/2 after:content-['TM']">Reality.</span></div>
                <div className='max-w-4xl mx-auto flex flex-col gap-8 justify-start items-start my-10 md:my-16 lg:my-24'>
                    <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl">
                        Go beyond VR, AR, and all the mixed reality stuff.
                    </div>
                    <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl relative z-20">
                        Listen, we need no screens for this: <br /><span onClick={() => { setIsPlayerReady(true); setPlaying(true) }} className='underline cursor-pointer'>Close your eyes and open your soul.</span>
                    </div>
                </div>
            </div>
            <Image className='max-w-[1400px] mx-auto w-full h-auto object-contain' src={`/image/reality.webp`} height={850} width={1400} alt='Reality' />
        </>
    )
}

export default TuneRealitySection