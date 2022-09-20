import React from 'react';
import {ACTIONS} from "./App";

const DigitalButton = ({digit, dispatch}) => {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}>
            {digit}
        </button>
    );
};

export default DigitalButton;
