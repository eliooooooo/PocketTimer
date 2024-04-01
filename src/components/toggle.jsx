import React from "react";

const Toggle = ({ state, toggle }) => {

    return (
        <button
            onClick={() => { toggle(); }}
        >
            {state ? "Stopwatch" : "Timer"}
        </button>
    );
}

export default Toggle;