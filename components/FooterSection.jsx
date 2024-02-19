import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const FooterSection = () => {
    return (
        <>
            <div className="w-full bg-[#FFF2F0] text-black">
                <div className='max-w-5xl mx-auto w-full px-4 py-12 md:py-20 flex flex-col md:flex-row md:justify-between md:items-center gap-6'>
                    <div className="flex flex-col gap-1 md:gap-4">
                        <div className="text-lg md:text-2xl lg:text-3xl">Earth.fm</div>
                        <div className="max-w-3xl font-bold text-3xl md:text-4xl lg:text-5xl">Listen to nature sounds,<br /> Fall in love with the Earth.</div>
                        <Link href={`https://earth.fm/about-us`} target="_blank" className="text-xl text-beta hover:text-beta/70 transition-all duration-300">Learn more</Link>
                    </div>
                    <div><Link href={`https://earth.fm`} target="_blank" className="bg-beta flex-shrink-0 text-white px-8 py-3 rounded-lg hover:bg-beta/80 transition-all duration-300">Joins the family</Link></div>
                </div>
            </div>
            <div className="w-full bg-[#FFF2F0] text-black border-t border-beta/50">
                <div className='max-w-7xl mx-auto w-full px-4 pt-12 pb-28 md:pb-36 grid sm:grid-col-8 lg:grid-cols-4 gap-2 sm:gap-3'>
                    <Link className="sm:col-span-2 lg:col-span-1 mb-4" href={`https://earth.fm/`} target="_blank"><Image className='hover:scale-105 transition-all duration-300 hover:drop-shadow-md' src={'/image/earth.fm.svg'} height={35} width={160} alt='earth.fm' /></Link>
                    <ul className="list-none flex flex-col gap-2 sm:gap-3">
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://earth.fm/about-us/`}>About us</Link></li>
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://earth.fm/faq/`}>Frequently Asked Questions</Link></li>
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://earth.fm/legal/`}>Legal</Link></li>
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://www.iubenda.com/privacy-policy/49199383`}>Privacy Policy</Link></li>
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://www.dropbox.com/sh/rd58h49l7bwqo68/AADA39CJG0Hy8Ps9pJ54lFx1a?dl=0`}>Press Kit</Link></li>
                    </ul>
                    <ul className="list-none flex flex-col gap-2 sm:gap-3">
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://earth.fm/contact-us/`}>Contact us</Link></li>
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://earth.fm/helpful-resources/`}>Helpful Resources</Link></li>
                        <li className='text-beta sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`https://earth.fm/terms-of-use/`}>Terms of Use</Link></li>
                    </ul>
                    <div className="sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-end items-center self-start gap-3 text-white">
                        <Link href={`https://twitter.com/earth_fm_live`} className="w-7 h-7 rounded bg-[#1da1f2] flex justify-center items-center hover:bg-opacity-80 transition-all duration-300">
                            <BsTwitter />
                        </Link>
                        <Link href={`https://www.instagram.com/earthfm_live`} className="w-7 h-7 rounded bg-[#f00075] flex justify-center items-center hover:bg-opacity-80 transition-all duration-300">
                            <BsInstagram />
                        </Link>
                        <Link href={`https://www.youtube.com/c/earthfm`} className="w-7 h-7 rounded bg-[#ff0000] flex justify-center items-center hover:bg-opacity-80 transition-all duration-300">
                            <BsYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSection