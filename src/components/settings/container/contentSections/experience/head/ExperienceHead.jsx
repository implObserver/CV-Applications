import { useState } from 'react';
import { Arrow } from '../../../../../templates/arrow/Arrow';

export const ExperienceHead = ({ section }) => {
    const [state, setState] = useState('close__head');
    const arrow = Arrow();

    const changeState = () => {
        setState(state === 'close__head' ? 'open__head' : 'close__head');
    }

    return (
        <>
            <button
                className={`experience__head ${state}`}
                onClick={() => {
                    arrow.setPozitionArrow();
                    section.changeState();
                    changeState();
                }}
            >
                <h2>Experience</h2>
                {arrow.render}
            </button>
        </>
    );
};