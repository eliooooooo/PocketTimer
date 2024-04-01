import React from "react";
import { useStopwatch } from "react-timer-hook";

function Stopwatch() {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        resume,
        reset,
    } = useStopwatch();

    return (
        <div style={{ textAlign: "center" }}>
            <p>Stopwatch</p>
            <div style={{ fontSize: "100px", fontFamily: "AlarmClock" }}>
                <span>{hours.toString().padStart(2, '0')}</span>:<span>{minutes.toString().padStart(2, '0')}</span>:<span>{seconds.toString().padStart(2, '0')}</span>
            </div>
            <p>{isRunning ? "Running" : "Not running"}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch;