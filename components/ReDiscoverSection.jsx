import Image from 'next/image'
import React from 'react'

const ReDiscoverSection = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-0 mb-12 md:my-16'>
                <div className="max-w-5xl mx-auto flex flex-col gap-3 md:gap-5">
                    <div className="text-base md:text-xl lg:text-2xl">Rediscover listening</div>
                    <div className="max-w-3xl font-bold text-5xl md:text-7xl lg:text-[100px] lg:leading-[100px]">Nature sounds. <br />Can u listen?</div>
                    <p className='text-lg md:text-2xl lg:text-3xl'>
                        How about this? Instead of spending thousands of dollars on more screens to glue to your face, you can take some time right now to <span className='text-alpha'>pause, listen, and be amazed.</span>
                    </p>
                    <p className='text-lg md:text-2xl lg:text-3xl'>
                        It’s a truly radical act. Not instragrammable, but extremely rewarding: by coming back to our senses we feel more spacious, more relaxed, we can sleep better.
                    </p>
                </div>
            </div>
            <Image className='max-w-[1400px] mx-auto w-full h-auto object-contain' src={`/image/nature.webp`} height={905} width={1440} alt='Nature' />
        </>
    )
}

export default ReDiscoverSection