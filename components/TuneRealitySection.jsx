import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TuneRealitySection = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 my-12'>
                <div className="w-full text-center font-bold text-6xl md:text-7xl lg:text-[110px] lg:leading-[100px]">Tune in to Real <span className="relative after:absolute after:text-alpha after:text-5xl after:-top-2 after:-right-6 after:-translate-x-1/2 after:content-['TM']">Reality.</span></div>
                <div className="max-w-5xl mx-auto text-5xl my-24">
                    Do you know what’s even cooler than Virtual Reality, Augmented Reality and all the Mixed Reality stuff?
                    Listen, we’ve got so hooked on screens that we forgot this essential, restorative practice: <br /><Link className='underline' href={`#`}>close your eyes and open your soul.</Link>
                </div>
            </div>
            <Image className='max-w-7xl mx-auto w-full h-auto object-contain' src={`/image/reality.webp`} height={850} width={1400} alt='Reality' />
        </>
    )
}

export default TuneRealitySection