import { HiVolumeUp } from "react-icons/hi";
import { ImVolumeMedium } from "react-icons/im";
import { MdVolumeUp } from "react-icons/md";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

const IntroducingSection = () => {

    const GenreList = [
        {
            title: 'Seaside',
            img: 'genre-1.webp',
            url: '#'
        },
        {
            title: 'Listening Meditation',
            img: 'genre-2.webp',
            url: '#'
        },
        {
            title: 'Trees',
            img: 'genre-3.webp',
            url: '#'
        },
        {
            title: 'Sleep',
            img: 'genre-4.webp',
            url: '#'
        },
        {
            title: 'Mountains',
            img: 'genre-5.webp',
            url: '#'
        },
    ]


    return (
        <>
            <div className='max-w-7xl mx-auto w-full p-4 mt-10'>
                <div className="max-w-4xl mx-auto text-5xl my-24 flex flex-col gap-6">
                    <div className="text-3xl">Introducing Earth.fm</div>
                    <div className="max-w-3xl font-bold text-[110px] leading-[100px]">Play it<br /><span className="text-alpha">by ear.</span></div>
                    <p className='text-3xl mt-10'>
                        At Earth.fm we consider that conscious listening is a gateway to re-learning to live a more quiet, calm, and meaningful life, one in which we feel more in harmony with the natural environment, with ourselves, and with each other. <br />That’s why we’re creating and curating world’s most diverse collection of immersive natural soundscapes: <Link href={`#`}>so you can listen to and discover your own Inner Vision.</Link>
                    </p>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto border-t border-b border-white/20">
                <div className='max-w-7xl mx-auto w-full'>
                    <div className="grid md:grid-cols-2 gap-6 divide-x-[1px] divide-white/20">
                        <div className="flex flex-col justify-between gap-2 px-10 py-16">
                            <div className="flex flex-col w-full items-center gap-1">
                                <div className="text-lg text-center">More than</div>
                                <div className="w-full font-bold text-[100px] leading-[100px] flex justify-center items-end gap-2"><span className="text-alpha">800 </span> <span className="text-7xl"> recordings</span></div>
                                <div className="text-lg text-center">from hundreds of field recordists<br /> around the world</div>
                            </div>
                            <div className="flex flex-col w-full items-center gap-1">
                                <div className="text-lg text-center">And</div>
                                <div className="w-full font-bold text-[100px] leading-[100px] flex justify-center items-end gap-2"><span className="text-alpha">0 </span> <span className="text-7xl"> profit</span></div>
                                <div className="text-lg text-center">we are a registered charity,<br />
                                    access to nature is a human right</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center px-10 py-16">
                            <Image className="object-contain w-full" src={'/image/hills.webp'} height={558} width={557} alt='Hills' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto w-full p-4 my-20'>
                <div className="grid grid-cols-5 gap-4">
                    {
                        GenreList.map((item, index) => {
                            return (
                                <div className="flex items-center justify-center">
                                    <PinContainer
                                        title={item.title}
                                        href="https://twitter.com/mannupaaji"
                                    >
                                        <Image src={`/image/${item.img}`} height={257} width={257} alt={`Genre`} />
                                        <div className="absolute top-0 left-0 p-5 w-full text-3xl font-medium">{item.title}</div>
                                    </PinContainer>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
            {/* <div className='max-w-7xl mx-auto w-full p-4 my-20'>
                <div className="grid grid-cols-5 gap-4">
                    {
                        GenreList.map((item, index) => {
                            return (
                                <div className="h-[40rem] w-full flex items-center justify-center">
                                    <PinContainer>
                                        <Link href={item.url} key={index} className="rounded-md relative">
                                            <Image src={`/image/${item.img}`} height={257} width={257} alt={`Genre`} />
                                            <div className="absolute top-0 left-0 p-5 w-full text-3xl font-medium">{item.title}</div>
                                        </Link>
                                    </PinContainer>
                                </div>
                            );
                        })
                    }
                </div>

            </div> */}

        </>
    )
}

export default IntroducingSection