import { useState } from "react";
import { Arrow } from "../arrow/Arrow";

export const Head = () => {
    const [state, setState] = useState(0);
    const [block, setBlock] = useState('unblock');

    const arrow = Arrow();

    const getArrow = () => {
        return arrow;
    }

    const changeState = () => {
        setState(state === 0 ? 1 : 0);
    }

    const changeBlock = (val) => {
        setBlock(val);
    }

    const getState = () => {
        return state;
    }

    const getBlockStatus = () => {
        return block;
    }

    return { getArrow, changeState, changeBlock, getState, getBlockStatus };
};