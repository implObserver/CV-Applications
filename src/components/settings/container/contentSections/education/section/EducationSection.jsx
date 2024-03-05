import { useState } from 'react';
import '../../../../../../styles/EducationSection.css';
import { EducationAdd } from './educationAdd/EducationAdd';
import { EducationForm } from '../../../../../forms/educationForm/EducationForm';

export const EducationSection = () => {
    const [isForm, setIsForm] = useState(false);
    const [state, setState] = useState('close');

    const setForm = (val) => {
        setIsForm(val);
    }

    const render = (
        <>
            <div className={`education__section`}>
                {(() => {
                    if (isForm) {
                        return (<><EducationForm></EducationForm></>)
                    } else {
                        console.log(isForm)
                        return (<><EducationAdd setForm = {setForm} status={state}></EducationAdd></>)
                    }
                })()}
            </div>
        </>
    );

    const changeState = () => {
        setState(state === 'close' ? 'open' : 'close');
    };

    return { render, changeState };
};
