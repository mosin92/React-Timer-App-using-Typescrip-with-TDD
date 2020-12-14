import React,{useState} from 'react'
import './ControlButton.css'
type Props= {
    settimesecond: Function;
};
export const ControlButtons = (props: Props) => {
    
    const [intervalId, setintervalId] = useState<number>(0);
    let [play, setplay] = useState<boolean>(true);
    let [stop, setstop] = useState<boolean>(false);
    let [reset, setreset] = useState<boolean>(false);

    let { settimesecond } = props;

    const playbutton: any = () => {
        
        if (play) {
            setplay(false);
            setstop(true);
            setreset(true);
            let interval: any = setInterval(() => {
                settimesecond((previous: number) => previous + 1)
            }, 1000);
            setintervalId(interval);
        }
    }

    const stopbutton = () => {
        if (stop) {
            setplay(true);
            setstop(false);
            setreset(true);
            clearInterval(intervalId);

        }
    }

    const resetbutton = () => {
        if (reset) {
            setreset(false);
            setplay(true);
            setstop(true);
            clearInterval(intervalId);
            settimesecond(0);
        }
    }
    return (
        <section className="control-container">
            <button onClick={playbutton}>Play</button>
            <button onClick={ stopbutton}>Stop</button>
            <button onClick={resetbutton}>Reset</button>
        </section>
    )
}
