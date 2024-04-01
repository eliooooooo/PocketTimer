import React, { useState } from "react";
import Toggle from "./toggle";
import Timer from "./timer";
import Stopwatch from "./stopwatch";

function Container({ expiryTimestamp }) {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    };
    
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Pocket Timer</h1>
            <Toggle state={state} toggle={toggle}/>
            {state ? <Timer /> : <Stopwatch />}
            </div>
    );
}

export default Container;