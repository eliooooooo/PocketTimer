import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp, inputTime }) {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn("onExpire called") });

    const toggle = () => {
        if (isRunning) {
            pause();
        } else {
            start();
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <p>Timer</p>
            <div style={{ fontSize: "100px", fontFamily: "AlarmClock" }}>
                <span>{hours.toString().padStart(2, '0')}</span>:<span>{minutes.toString().padStart(2, '0')}</span>:<span>{seconds.toString().padStart(2, '0')}</span>
            </div>
            <p>{isRunning ? "Running" : "Not running"}</p>
            <button onClick={toggle}>{isRunning ? "Pause" : "Start"}</button>
            <button onClick={resume}>Resume</button>
            <button
                onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + (inputTime * 60));
                    restart(time);
                }}
            >
                Restart
            </button>
        </div>
    );
}

export default Timer;