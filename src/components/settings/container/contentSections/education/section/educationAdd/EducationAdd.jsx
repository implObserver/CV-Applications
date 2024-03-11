import { useState } from 'react'
import '../../../../../../../styles/EducationAdd.css'
import { EducationAddButton } from './button/Add'

export const EducationAdd = () => {
    const [state, setState] = useState('unvisible__education-add');

    const changeState = () => {
        console.log('adadad')
        setState(state === 'visible__education-add' ? 'unvisible__education-add' : 'visible__education-add');
        button.changeState();
    }

    const button = EducationAddButton();

    const render = (drawIt,form) => {
        return (<>
            <div className={`education__add ${state}`}>
                {button.render(drawIt, form, changeState)}
            </div>
        </>)
    }

    return { render, changeState };
}