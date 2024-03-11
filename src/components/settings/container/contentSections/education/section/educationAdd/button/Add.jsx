import { useState } from "react";

export const EducationAddButton = () => {
    const [state, setState] = useState('close__button');

    const changeState = () => {
        setState(state === 'close__button' ? 'open__button' : 'close__button');
    }

    const render = (drawIt, form, changeState) => {
        return (<>
            <button className={`education__add__button ${state}`}
                onClick={() => {
                    drawIt('form');
                    form.changeVisible();
                    changeState()
                }}>
                <span>+ Education</span>
            </button>
        </>)
    }

    return { render, changeState }
}
