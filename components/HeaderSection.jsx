import React from 'react'

const HeaderSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full flex justify-between items-center p-4'>
            <div className="text-2xl">InnerVision</div>
            <button className="bg-beta px-8 py-3 rounded-lg hover:bg-beta/80 transition-all duration-300">Listen Now</button>
        </div>
    )
}

export default HeaderSection