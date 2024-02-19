import Link from 'next/link'
import React from 'react'

const HeaderSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full flex justify-between items-center p-4'>
            <div className="text-xl md:text-2xl">InnerVision</div>
            <Link href={`https://earth.fm`} target='_blank' className="bg-beta text-sm md:text-base px-4 md:px-8 py-2 md:py-3 rounded-lg hover:bg-beta/80 transition-all duration-300">Join</Link>
        </div>
    )
}

export default HeaderSection