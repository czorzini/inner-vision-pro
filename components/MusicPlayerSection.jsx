'use client'

import { BsFillPauseCircleFill } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";

import { BiSkipNext } from "react-icons/bi";
import React, { useState, useRef } from 'react';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const MusicPlayerSection = () => {
    const [playing, setPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0.1);
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

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={MusicList[currentTrack].cover} alt="Cover" className="w-full h-64 object-cover" />
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold">{MusicList[currentTrack].title}</h2>
                    <h3 className="text-gray-600">{MusicList[currentTrack].artist}</h3>
                    <div className="flex items-center mt-4">
                        <BiSkipNext onClick={handlePrevious} className="rotate-180 cursor-pointer text-4xl focus:outline-none text-gray-600 hover:text-gray-900" />
                        {playing ? (
                            <BsFillPauseCircleFill onClick={handlePause} className="cursor-pointer text-3xl focus:outline-none text-gray-600 hover:text-gray-900" />
                        ) : (
                            <BsFillPlayCircleFill onClick={handlePlay} className="cursor-pointer text-3xl focus:outline-none text-gray-600 hover:text-gray-900" />
                        )}
                        <BiSkipNext onClick={handleNext} className="cursor-pointer text-4xl focus:outline-none text-gray-600 hover:text-gray-900" />

                    </div>
                    <div className="flex items-center mt-4">
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step="any"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-full h-5 bg-gray-200 rounded-lg overflow-hidden appearance-none focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center mt-4">
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step="any"
                            value={played}
                            onMouseDown={handleSeekMouseDown}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekMouseUp}
                            className="w-full h-5 bg-gray-200 rounded-lg overflow-hidden appearance-none focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            <ReactPlayer
                ref={playerRef}
                url={MusicList[currentTrack].musicUrl}
                playing={playing}
                volume={volume}
                controls={false}
                width="0px"
                height="0px"
                onProgress={handleProgress}
            />
        </div>
    );
};

export default MusicPlayerSection;

