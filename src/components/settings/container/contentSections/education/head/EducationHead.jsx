import { useState } from 'react';
import '../../../../../../styles/EducationHead.css';
import { Arrow } from '../../../../../arrow/Arrow';

export const EducationHead = ({ section }) => {
    const [state, setState] = useState('close__head');
    const arrow = Arrow();

    const changeState = () => {
        setState(state === 'close__head' ? 'open__head' : 'close__head');
    }

    return (
        <>
            <button
                className={`education__head ${state}`}
                onClick={() => {
                    arrow.setPozitionArrow();
                    section.changeState();
                    changeState();
                }}
            >
                <h2>Education</h2>
                {arrow.render}
            </button>
        </>
    );
};
