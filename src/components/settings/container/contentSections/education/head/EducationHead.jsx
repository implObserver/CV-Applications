import { useState } from 'react';
import '../../../../../../styles/EducationHead.css';
import { Arrow } from '../../../../../arrow/Arrow';

export const EducationHead = ({ section, form }) => {
    const [state, setState] = useState('close__head');
    const [block, setBlock] = useState('');

    const arrow = Arrow();

    const changeState = () => {
        setState(state === 0 ? 1 : 0);
    }

    return (
        <>
            <button
                className={`education__head ${state === 0 ? 'close__head' : 'open__head'} ${block}`}
                onClick={() => {
                    arrow.setPozitionArrow();
                    section.changeState();
                    changeState();
                    if (section.isFormOpen()) {
                        form.changeVisibleFields();
                    }
                    setBlock('block');
                    setTimeout(() => {
                        setBlock('');
                    }, 600);
                }}
            >
                <h2>Education</h2>
                {arrow.render}
            </button >
        </>
    );
};
