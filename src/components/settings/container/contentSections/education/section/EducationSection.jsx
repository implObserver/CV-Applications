import { useState } from 'react';
import '../../../../../../styles/EducationSection.css';
import { EducationAdd } from './educationAdd/EducationAdd';

export const EducationSection = () => {
    const [state, setState] = useState('close');

    const render = (
        <>
            <div className={`education__section ${state}`}>
                <EducationAdd></EducationAdd>
            </div>
        </>
    );

    const changeState = () => {
        setState(state === 'close' ? 'open' : 'close');
    };

    return { render, changeState };
};
