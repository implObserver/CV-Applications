import { useState } from 'react';

export const State = (state1 = 0, state2 = 1) => {
    const [state, setState] = useState(state1);

    const switchState = () => {
        setState(state === state1 ? state2 : state1);
    };

    const getState = () => {
        return state;
    };

    return { switchState, getState, setState };
};
