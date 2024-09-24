import React, { useState } from "react";
import Toggle from "./toggle";
import Timer from "./timer";
import Stopwatch from "./stopwatch";
import TimeInput from "./timeinput";

function Container({ expiryTimestamp }) {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    };

    const [time, setTime] = useState(5);
    const changeTime = (event) => {
        setTime(event.target.value);
    }
    const submitTime = (event) => {
        event.preventDefault();
    }
    
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Pocket Timer</h1>
            <Toggle state={state} toggle={toggle}/>
            {state ? <TimeInput time={time} changeTime={changeTime} submitTime={submitTime} /> : null}
            {state ? <Timer inputTime={time} /> : <Stopwatch />}
            </div>
    );
}

export default Container;