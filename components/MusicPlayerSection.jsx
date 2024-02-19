'use client'

import { TbPlayerPlayFilled } from "react-icons/tb";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsRepeat } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import { ImVolumeMedium } from "react-icons/im";
import { CgClose } from "react-icons/cg";

import { BsFillPauseCircleFill } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiSkipNext } from "react-icons/bi";
import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from "react-player";
import Image from "next/image";

const MusicPlayerSection = ({ isPlayerReady, setIsPlayerReady }) => {
    const [playing, setPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0.1);
    const [duration, setDuration] = useState(0);
    const [seeking, setSeeking] = useState(false);

    const MusicList = [
        {
            title: "A Night With the Crickets",
            artist: "Rüdiger Ortiz-Álvarez",
            musicUrl: "https://gcs.earth.fm/wp-content/uploads/2024/02/earth-fm_Rudiger-Ortiz-Alvarez_Bailadero_Verano_SM4_R2_20200827_000000.mp3",
            cover: "https://earth.fm/static/454ad50c5ac399d501e2f8c83da8fe30/26222/18-Felix-Blume-Toads-and-frogs-during-night-in-Thailand-scaled.webp"
        },
        {
            title: "Tropicbirds and Frigatebirds of Little Tobago",
            artist: "Giselle Ragoonanan",
            musicUrl: "https://gcs.earth.fm/wp-content/uploads/2024/01/Tropicbirds_and_Frigatebirds_Little_Tobago_Giselle_Ragoonanan_EarthfmGrants_192.mp3",
            cover: "https://earth.fm/static/e06a2d5b84a909078323e323a81433e3/26222/383_Hauturu-Afternoon-scaled.webp"
        },
        {
            title: "Whisper of a Mountain Stream",
            artist: "Vladimir Bocharov",
            musicUrl: "https://gcs.earth.fm/wp-content/uploads/2024/01/earth-fm_Vladimir-Bocharov_2016.07-08_Mountain-stream-Saylyugemsky-National-Park-Altai-Republic-Russia_20-min-RX.mp3",
            cover: "https://earth.fm/static/1489dd1a94d84c311013e2e22dd26959/26222/285_Tasmanian-Rainforest-Stream-scaled.webp"
        },
        {
            title: "Akkol River’s Tale",
            artist: "Vladimir Bocharov",
            musicUrl: "https://gcs.earth.fm/wp-content/uploads/2023/12/earth-fm_Vladimir-Bocharov_2016.07-08_Akkol-River-Saylyugemsky-National-Park-Altai-Republic-Russia_07-min-RX.mp3",
            cover: "https://earth.fm/static/53f8c2b9e3a69cdeef0d9d30b0129be3/26222/13-Riverine-scaled.webp"
        },
        {
            title: "Falling Snowflake",
            artist: "Jan Brelih",
            musicUrl: "https://gcs.earth.fm/wp-content/uploads/2024/01/Snowfall_Slovenia_Kocevski_Rog_192_Jan_Brelih_earth-experience.com_.mp3",
            cover: "https://earth.fm/static/5b6ffc04aebc5f627c8f7192f01aaeef/26222/283_Storm-with-powerful-thunder-scaled.webp"
        },
    ];


    const playerRef = useRef(null);

    const handlePlay = () => {
        setPlaying(true);
    };

    const handlePause = () => {
        setPlaying(false);
    };

    const handleNext = () => {
        setCurrentTrack((prevTrack) => (prevTrack === MusicList.length - 1 ? 0 : prevTrack + 1));
    };

    const handlePrevious = () => {
        setCurrentTrack((prevTrack) => (prevTrack === 0 ? MusicList.length - 1 : prevTrack - 1));
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleSeekMouseDown = () => {
        setSeeking(true);
    };

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value));
    };

    const handleSeekMouseUp = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(played);
            setSeeking(false);
        }
    };

    const handleProgress = (state) => {
        if (!seeking) {
            setPlayed(state.played);
        }
    };

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };


    return (
        <>
            {isPlayerReady && <div className="fixed !z-[999] bottom-0 w-full text-white/70 px-3 md:px-0">
                <div className="max-w-2xl rounded-full mx-auto my-2 grid grid-cols-4 md:grid-cols-4 gap-3 py-1 sm:py-2 px-4 sm:px-6 bg-beta/70 backdrop-blur-md">
                    <div className="order-2 sm:order-1 flex justify-center items-center gap-4">
                        <TbPlayerTrackNextFilled onClick={handlePrevious} className="rotate-180 cursor-pointer text-xl focus:outline-none" />
                        {playing ? (
                            <TbPlayerPauseFilled onClick={handlePause} className="cursor-pointer text-xl focus:outline-none" />
                        ) : (
                            <TbPlayerPlayFilled onClick={handlePlay} className="cursor-pointer text-xl focus:outline-none" />
                        )}
                        <TbPlayerTrackNextFilled onClick={handleNext} className="cursor-pointer text-xl focus:outline-none" />
                    </div>
                    <div className="order-1 sm:order-2 col-span-3 sm:col-span-2 flex flex-col px-2 overflow-hidden rounded-2xl">
                        <div className="flex items-center gap-2 bg-black/10 shadow-inner rounded-lg">
                            <Image src={MusicList[currentTrack].cover} height={60} width={60} alt="Cover" className="h-10 w-10 object-cover rounded-md" />
                            <div className="flex flex-col gap-0">
                                <h2 className="text-xs lg:text-sm font-semibold line-clamp-1">{MusicList[currentTrack].title}</h2>
                                <h3 className="text-[10px] lg:text-xs !font-normal font-sans opacity-80">{MusicList[currentTrack].artist}</h3>
                            </div>
                        </div>
                        <div className={`h-[3px] w-full bg-black/30 relative`}>
                            <div style={{ width: `${(played * 100)}%` }} className="absolute z-40 top-0 left-0 content-normal h-full bg-white/70 transition-all duration-300"></div>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step="any"
                                value={played}
                                onMouseDown={handleSeekMouseDown}
                                onChange={handleSeekChange}
                                onMouseUp={handleSeekMouseUp}
                                className="w-full opacity-0 z-[999] hover:opacity-100 absolute top-0 left-0 bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                                    [&::-webkit-slider-thumb]:w-2.5
                                    [&::-webkit-slider-thumb]:h-2.5
                                    [&::-webkit-slider-thumb]:-mt-[3px]
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:bg-transparent
                                    [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_transparent]
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:transition-all
                                    [&::-webkit-slider-thumb]:duration-150
                                    [&::-webkit-slider-thumb]:ease-in-out
                                    [&::-webkit-slider-thumb]:dark:bg-transparent
                                    
                                    [&::-moz-range-thumb]:w-2.5
                                    [&::-moz-range-thumb]:h-2.5
                                    [&::-moz-range-thumb]:appearance-none
                                    [&::-moz-range-thumb]:bg-white
                                    [&::-moz-range-thumb]:border-0
                                    [&::-moz-range-thumb]:border-transparent
                                    [&::-moz-range-thumb]:rounded-full
                                    [&::-moz-range-thumb]:transition-all
                                    [&::-moz-range-thumb]:duration-150
                                    [&::-moz-range-thumb]:ease-in-out/40
                                    
                                    [&::-webkit-slider-runnable-track]:w-full
                                    [&::-webkit-slider-runnable-track]:h-1
                                    [&::-webkit-slider-runnable-track]:bg-transparent
                                    [&::-webkit-slider-runnable-track]:rounded-full
                                    [&::-webkit-slider-runnable-track]:dark:bg-transparent                                
                                    [&::-moz-range-track]:w-full
                                    [&::-moz-range-track]:h-1
                                    [&::-moz-range-track]:bg-transparent
                                    [&::-moz-range-track]:rounded-full"
                            />
                        </div>

                    </div>

                    <div className="order-3 hidden sm:flex items-center justify-center gap-4">
                        <ImVolumeMedium className="text-2xl focus:outline-none" />
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step="any"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="max-w-24 w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                                [&::-webkit-slider-thumb]:w-2.5
                                [&::-webkit-slider-thumb]:h-2.5
                                [&::-webkit-slider-thumb]:-mt-[3px]
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:bg-white/40
                                [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_white/40]
                                [&::-webkit-slider-thumb]:rounded-full
                                [&::-webkit-slider-thumb]:transition-all
                                [&::-webkit-slider-thumb]:duration-150
                                [&::-webkit-slider-thumb]:ease-in-out
                                [&::-webkit-slider-thumb]:dark:bg-white/40
                                
                                [&::-moz-range-thumb]:w-2.5
                                [&::-moz-range-thumb]:h-2.5
                                [&::-moz-range-thumb]:appearance-none
                                [&::-moz-range-thumb]:bg-white
                                [&::-moz-range-thumb]:border-0
                                [&::-moz-range-thumb]:border-blue-600
                                [&::-moz-range-thumb]:rounded-full
                                [&::-moz-range-thumb]:transition-all
                                [&::-moz-range-thumb]:duration-150
                                [&::-moz-range-thumb]:ease-in-out/40
                                
                                [&::-webkit-slider-runnable-track]:w-full
                                [&::-webkit-slider-runnable-track]:h-1
                                [&::-webkit-slider-runnable-track]:bg-gray-100
                                [&::-webkit-slider-runnable-track]:rounded-full
                                [&::-webkit-slider-runnable-track]:dark:bg-white/40                                
                                [&::-moz-range-track]:w-full
                                [&::-moz-range-track]:h-1
                                [&::-moz-range-track]:bg-gray-100
                                [&::-moz-range-track]:rounded-full"
                        />
                        <CgClose onClick={() => setIsPlayerReady(false)} className="cursor-pointer text-3xl focus:outline-none hover:opacity-70 transition-all duration-300" />
                    </div>

                </div>
                {isPlayerReady && <ReactPlayer
                    ref={playerRef}
                    url={MusicList[currentTrack].musicUrl}
                    playing={playing}
                    volume={volume}
                    controls={false}
                    onDuration={(e) => setDuration(e)}
                    width="0px"
                    height="0px"
                    onProgress={handleProgress}
                />}
            </div>}
        </>
    );
};

export default MusicPlayerSection;
