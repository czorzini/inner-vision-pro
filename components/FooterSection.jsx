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
                <div className='max-w-5xl mx-auto w-full px-4 py-20 flex justify-between items-center'>
                    <div className="text-5xl flex flex-col gap-4">
                        <div className="text-3xl">Earth.fm</div>
                        <div className="max-w-3xl font-bold text-5xl">Listen to nature sounds,<br /> Fall in love with the Earth.</div>
                        <div className="text-xl text-beta">Learn more</div>
                    </div>
                    <Link href={`https://earth.fm`} className="bg-beta text-white px-8 py-3 rounded-lg hover:bg-beta/80 transition-all duration-300">Listen Now</Link>
                </div>
            </div>
            <div className="w-full bg-[#FFF2F0] text-black border-t border-beta/50">
                <div className='max-w-7xl mx-auto w-full px-4 pt-12 pb-36 grid grid-cols-4'>
                    <Link href={`#`}><Image className='hover:scale-105 transition-all duration-300 hover:drop-shadow-md' src={'/image/earth.fm.svg'} height={35} width={160} alt='earth.fm' /></Link>
                    <ul className="list-none flex flex-col gap-3">
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>About us</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Frequently Asked Questions</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Legal</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Privacy Policy</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Press Kit</Link></li>
                    </ul>
                    <ul className="list-none flex flex-col gap-3">
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Contact us</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Helpful Resources</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Terms of Use</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Cookie Policy</Link></li>
                        <li className='text-beta text-lg hover:translate-x-1 transition-all duration-300'><Link href={`#`}>Sitemap</Link></li>
                    </ul>
                    <div className="flex justify-end items-center self-start gap-3 text-white">
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