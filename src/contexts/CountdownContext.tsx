import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;

}

interface CountdownProviderProps {
    children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData)

let countdowmTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
        const {startNewChallenge} = useContext(ChallengesContext);
        const [time, setTime] = useState(25 * 60);
        const [isActive, setIsActive] = useState(false);
        const [hasFinished, setHasFinished] = useState(false);
    
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        function startCountdown() {
            setIsActive(true);
          }
      
          function resetCountdown() {
              clearTimeout(countdowmTimeout);
              setIsActive(false);
              setHasFinished(false);
              setTime(25 * 60);
          }

        useEffect(() => {
            if (isActive && time > 0) {
               countdowmTimeout = setTimeout(() => {
                    setTime(time -1);
                }, 1000)
               } else if (isActive && time === 0) {
                   setHasFinished(true);
                   setIsActive(false);
                   startNewChallenge();
               } 
           }, [isActive, time])




    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

export default CountdownContext;