import { HiVolumeUp } from "react-icons/hi";
import { ImVolumeMedium } from "react-icons/im";
import { MdVolumeUp } from "react-icons/md";
import Image from 'next/image'
import React from 'react'

const ReDiscoverSection = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 my-16'>
                <div className="max-w-5xl mx-auto text-5xl flex flex-col gap-6">
                    <div className="text-3xl">Rediscover listening</div>
                    <div className="max-w-4xl font-bold text-[110px] leading-[100px]">Nature sounds. <br />Can u listen?</div>
                    <p className='text-3xl'>
                        How about this? Instead of spending thousands of dollars on more screens to glue to your face, you can take some time right now to pause, listen, and be amazed.
                    </p>
                    <p className='text-3xl'>
                        It’s a truly radical act. Not instragrammable, but extremely rewarding: by coming back to our senses we feel more spacious, more relaxed, we can sleep better.
                    </p>
                </div>
            </div>
            <Image className='max-w-7xl mx-auto w-full h-auto object-contain' src={`/image/nature.webp`} height={905} width={1440} />
        </>
    )
}

export default ReDiscoverSection