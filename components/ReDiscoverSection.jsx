import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ReDiscoverSection = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-0 mb-12 md:my-16'>
                <div className="max-w-5xl mx-auto flex flex-col gap-3 md:gap-5">
                    <div className="text-base md:text-xl lg:text-2xl">Rediscover listening</div>
                    <div className="max-w-3xl font-bold text-5xl md:text-7xl lg:text-[100px] lg:leading-[100px]">Nature sounds. <br /><span className='text-alpha'>Can u listen?</span></div>
                    <p className='text-lg md:text-2xl lg:text-3xl'>
                        How about this? Instead of spending thousands of dollars on more screens to glue to your face, you can take some time right now to <Link href="https://earth.fm/playlists/forests" target="_blank" className='underline'>pause, listen, and be amazed.</Link>
                    </p>
                    <p className='text-lg md:text-2xl lg:text-3xl'>
                        It’s a truly radical act. Not instragrammable, but extremely rewarding: by regularly coming back to our senses we feel more spacious, more relaxed, we can sleep better.
                    </p>
                </div>
            </div>
            {/* <Image className='max-w-[1400px] mx-auto w-full h-auto object-contain' src={`/image/nature.webp`} height={905} width={1440} alt='Nature' /> */}
            <video className='max-w-[1400px] mx-auto w-full h-auto object-contain' autoPlay loop muted playsInline>
                <source src="/video/nature.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

        </>
    )
}

export default ReDiscoverSection