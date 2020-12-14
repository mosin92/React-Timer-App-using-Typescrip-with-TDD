
 const CalculateTimer = (timersecond: number): Array<number |string> => {
    let hours:number = Math.floor(timersecond / 3600);
    let minutes:number = Math.floor((timersecond - (hours * 3600)) / 60);
     let seconds: number = timersecond - (hours * 3600) - (minutes * 60);
     
     let hoursFormate = hours < 10 ? `0${hours}` : hours;
     let minuteFormate = minutes < 10 ? `0${minutes}` : minutes;
     let secondFormate = seconds < 10 ? `0${seconds}` : seconds;
    return [
        hoursFormate,
        minuteFormate,
        secondFormate
    ];
}
export default CalculateTimer;