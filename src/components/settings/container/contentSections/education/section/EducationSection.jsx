import { useState } from 'react';
import { EducationAdd } from './educationAdd/EducationAdd';

export const EducationSection = () => {
    const [state, setState] = useState(0);
    const [draw, setDraw] = useState('button');

    const buttonWrapper = EducationAdd();

    const drawIt = (val) => {
        setDraw(val);
        if (val === 'button') {
            setTimeout(() => {
                buttonWrapper.changeState();
            }, 1);
        }
    }

    const render = (form) => (
        <>
            <div className={`education__section`}>
                {(() => {
                    if (draw === 'form') {
                        return (<>
                            {form.render()}
                        </>)
                    } else {
                        return (<>
                            {buttonWrapper.render(drawIt, form)}
                        </>)
                    }
                })()}
            </div>
        </>
    );

    const changeState = () => {
        setState(state === 1 ? 0 : 1);
        buttonWrapper.changeState();
    };

    const isFormOpen = () => {
        return draw === 'form';
    }

    return { render, changeState, isFormOpen, drawIt };
};
