import React,{useState} from 'react'
import './ControlButton.css'
type Props= {
    settimesecond: Function;
};
export const ControlButtons = (props: Props) => {
    
    const [intervalId, setintervalId] = useState<number>(0);

    let { settimesecond } = props;

    const playbutton:any = () => {
     let interval:any= setInterval(() => {
            settimesecond((previous:number) => previous + 1)
     }, 1000);
        setintervalId(interval);
    }

    const stopbutton = () => {
        clearInterval(intervalId);
    }

    const resetbutton = () => {
        clearInterval(intervalId);
        settimesecond(0);
    }
    return (
        <section className="control-container">
            <button onClick={playbutton}>Play</button>
            <button onClick={ stopbutton}>Stop</button>
            <button onClick={resetbutton}>Reset</button>
        </section>
    )
}
