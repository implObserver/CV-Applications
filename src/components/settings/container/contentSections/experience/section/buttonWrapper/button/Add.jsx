import { useState } from "react";

export const ExperienceAddButton = () => {
    const [state, setState] = useState('close__button');

    const changeState = () => {
        setState(state === 'close__button' ? 'open__button' : 'close__button');
    }

    const render = (drawIt, form, changeState) => {
        return (<>
            <button className={`experience__add__button ${state}`}
                onClick={() => {
                    console.log(form)
                    drawIt('form');
                    form.changeVisible();
                    changeState()
                }}>
                <span>+ Experience</span>
            </button>
        </>)
    }

    return { render, changeState }
}