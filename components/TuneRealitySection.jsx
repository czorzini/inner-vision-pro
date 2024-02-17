import Image from 'next/image'
import React from 'react'

const TuneRealitySection = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 my-12'>
                <div className="w-full text-center font-bold text-[110px] relative after:absolute after:text-alpha after:text-5xl after:top-0 after:right-0 after:-translate-x-1/2 after:content-['TM']">Tune in to Real Reality.</div>
                <div className="max-w-5xl mx-auto text-5xl my-24">
                    Do you know what’s even cooler than Virtual Reality, Augmented Reality and all the Mixed Reality stuff?
                    Listen, we’ve got so hooked on screens that we forgot this essential, restorative practice: <br /><u>close your eyes and open your soul.</u>
                </div>
            </div>
            <Image className='max-w-7xl mx-auto w-full h-auto object-contain' src={`/image/reality.webp`} height={850} width={1400} />
        </>
    )
}

export default TuneRealitySection