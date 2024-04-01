import { useState } from 'react';

export const State = (state1 = 0, state2 = 1, defaultVal = { value: state1 }) => {
    const [state, setNewState] = useState(defaultVal.value);

    const switchState = () => {
        const newState = state === state1 ? state2 : state1;
        setState(newState);
    };

    const setState = (state) => {
        defaultVal.value = state;
        setNewState(state);
    }

    const getState = () => {
        return state;
    };

    return { switchState, getState, setState };
};
