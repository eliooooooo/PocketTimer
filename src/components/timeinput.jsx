import React from "react";

const TimeInput = ({ submitTime, time, changeTime }) => {

    return (
        <form onSubmit = { submitTime }>
            <input
                type="number"
                name="time"
                placeholder="Entrez un temps"
                value = { time }
                onChange = { changeTime }
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default TimeInput;