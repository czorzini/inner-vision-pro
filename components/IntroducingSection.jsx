import Image from 'next/image'
import React from 'react'
import { PinContainer } from "./ui/3d-pin";
import Link from 'next/link';

const IntroducingSection = () => {

    const GenreList = [
        {
            title: 'Seaside',
            img: 'genre-1.webp',
            url: 'https://earth.fm/playlists/ocean-sounds'
        },
        {
            title: 'Listening Meditation',
            img: 'genre-2.webp',
            url: 'https://earth.fm/playlists/summer'
        },
        {
            title: 'Trees',
            img: 'genre-3.webp',
            url: 'https://earth.fm/playlists/forests'
        },
        {
            title: 'Sleep',
            img: 'genre-4.webp',
            url: 'https://earth.fm/playlists/best-nature-sounds-for-sleep'
        },
        {
            title: 'Rain Sounds',
            img: 'genre-6.webp',
            url: 'https://earth.fm/playlists/rain'
        },
    ]


    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-10'>
                <div className="max-w-4xl mx-auto mt-10 md:my-24 flex flex-col gap-3 md:gap-5">
                    <div className="text-alpha text-base md:text-xl lg:text-2xl">Earth.fm</div>
                    <div className="max-w-3xl font-bold text-5xl md:text-7xl lg:text-[100px] lg:leading-[100px]">Play it <br className='hidden md:block' />by ear.</div>
                    <p className='text-lg md:text-2xl lg:text-3xl mt-2 md:mt-8'>
                        At Earth.fm we consider that conscious listening is a gateway to re-learning to live a more quiet, calm, and meaningful life, one in which we feel more in harmony with the natural environment, with ourselves, and with each other. <br />That’s why we’re creating and curating world’s most diverse collection of immersive natural soundscapes: <br /> <u>so you can listen to and discover your own Inner Vision.</u>
                    </p>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto lg:border-t lg:border-b border-white/20">
                <div className='max-w-7xl mx-auto w-full'>
                    <div className="grid lg:grid-cols-2 gap-6 lg:divide-x-[1px] divide-white/20">
                        <div className="flex flex-col justify-between gap-12 px-4 md:px-10 py-5 md:py-16">
                            <div className="flex flex-col w-full items-center gap-1">
                                <div className="md:text-lg text-center">More than</div>
                                <div className="w-full font-bold text-4xl sm:text-6xl md:text-7xl xl:text-[100px] xl:leading-[100px] flex justify-center items-end gap-2"><span className="text-alpha">800 </span> <span className="text-3xl sm:text-5xl xl:text-7xl"> recordings</span></div>
                                <div className="md:text-lg text-center">from hundreds of field recordists<br /> around the world.</div>
                            </div>
                            <div className="flex flex-col w-full items-center gap-1">
                                <div className="md:text-lg text-center">And</div>
                                <div className="w-full font-bold text-4xl sm:text-6xl md:text-7xl xl:text-[100px] xl:leading-[100px] flex justify-center items-end gap-2"><span className="text-alpha">0 </span> <span className="text-3xl sm:text-5xl xl:text-7xl"> profit</span></div>
                                <div className="md:text-lg text-center">we are a registered charity,<br />
                                    access to nature is a human right.</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center px-4 md:px-10 py-5 md:py-16">
                            <Image className="object-contain w-full" src={'/image/hills.webp'} height={800} width={800} alt='Hills' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto w-full p-4 my-8 md:my-20'>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {
                        GenreList.map((item, index) => {
                            return (
                                <Link key={index} href={item.url} target='_blank'>
                                    <div className="flex items-center justify-center">
                                        <PinContainer
                                            title={item.title}
                                            href={item.url}
                                        >
                                            <Image className='w-full h-full object-cover' src={`/image/${item.img}`} height={257} width={257} alt={`Genre`} />
                                            <div className="absolute top-0 left-0 p-5 w-full text-lg md:text-2xl lg:text-3xl font-medium">{item.title}</div>
                                        </PinContainer>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default IntroducingSection