"use client"

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
    isPlayerReady: false,
    setIsPlayerReady: () => { },
    playing: false,
    setPlaying: () => { }
});

export default function Providers({ children }) {
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setIsPlayerReady(true);
    }, [])
    return (
        <AppContext.Provider value={{ isPlayerReady, setIsPlayerReady, playing, setPlaying }}>{children}</AppContext.Provider>
    );
}