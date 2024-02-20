"use client"

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
    isPlayerReady: false,
    setIsPlayerReady: () => { },
});

export default function Providers({ children }) {
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    useEffect(() => {
        setIsPlayerReady(true);
    }, [])
    return (
        <AppContext.Provider value={{ isPlayerReady, setIsPlayerReady }}>{children}</AppContext.Provider>
    );
}