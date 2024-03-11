import { useState } from "react";
import '../../../../../styles/ButtonWrapper.css';

export const ButtonWrapper = (button) => {
    const [state, setState] = useState('unvisible__button-wrapper');

    const changeState = () => {
        setState(state === 'visible__button-wrapper' ? 'unvisible__button-wrapper' : 'visible__button-wrapper');
        button.changeState();
    }

    const render = (drawIt, form) => {
        return (<>
            <div className={`button__wrapper ${state}`}>
                {button.render(drawIt, form, changeState)}
            </div>
        </>)
    }

    return { render, changeState };
}