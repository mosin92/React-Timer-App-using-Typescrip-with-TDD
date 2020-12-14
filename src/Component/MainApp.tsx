import React,{useState,useEffect} from 'react'
import './MainApp.css'
import CalculateTimer from './CalculateTimerFun/CalculateTimer';
import {ControlButtons} from './ControlButtons/ControlButtons'

export const MainApp: React.FC = () => {
    const [timesecond, settimesecond] = useState<number>(0);
    const [timeArray, setTimeArray] = useState<Array<number |string>>([]);
    useEffect(() => {
        let arraytime: Array<number |string> = CalculateTimer(timesecond);
        setTimeArray(arraytime);
    }, [timesecond]);
    return (
        <div>
          <section className="timer-container">
            <p className="timer-text">{timeArray[0] }</p>
            <span>:</span>
            <p className="timer-text">{ timeArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timeArray[2]}</p>
            </section>
            <ControlButtons settimesecond={settimesecond } />
         </div>
    )
}
