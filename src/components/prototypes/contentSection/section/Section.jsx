import { useState } from "react";

export const Section = (buttonWrapper) => {
    const [state, setState] = useState(0);
    const [draw, setDraw] = useState('button');
    const childs = [buttonWrapper];

    const drawIt = (val) => {
        setDraw(val);
        setTimeout(() => {
            changeStateChilds();
        }, 10);
    }

    const changeState = () => {
        setState(state === 1 ? 0 : 1);
        changeStateChilds();
    };

    const changeStateChilds = () => {
        buttonWrapper.changeState();
    }

    const isFormOpen = () => {
        return draw === 'form';
    }

    const getDrawStatus = () => {
        return draw;
    }

    const getChilds = () => {
        return childs;
    }

    return { changeState, isFormOpen, drawIt, changeStateChilds, getDrawStatus, getChilds };
};