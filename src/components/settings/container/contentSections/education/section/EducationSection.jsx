import { useState } from 'react';
import '../../../../../../styles/EducationSection.css';
import { EducationAdd } from './educationAdd/EducationAdd';

export const EducationSection = (form) => {
    const [state, setState] = useState(0);
    const [isForm, setIsForm] = useState(false);

    const setForm = () => {
        setIsForm(!isForm);
    }

    const render = (
        <>
            <div className={`education__section`}>
                {(() => {
                    if (isForm) {
                        return (<>
                            {form.render()}
                        </>)
                    } else {
                        return (<><EducationAdd setForm={setForm} status={state} form={form}></EducationAdd></>)
                    }
                })()}
            </div>
        </>
    );

    const changeState = () => {
        setState(state === 1 ? 0 : 1);
    };

    const isFormOpen = () => {
        return isForm;
    }

    return { render, changeState, isFormOpen };
};
