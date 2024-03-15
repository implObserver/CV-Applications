import { useState } from 'react';
import { later } from '../../helper/Timeout';
import { State } from '../toggle/Toggle';

export const DynamicForm = (id, fields) => {
    const [labels, setLabel] = useState([]);
    const [timer, setTimer] = useState(later(50));
    const [masterKey, setMasterKey] = useState(0);

    const toggle = State(true, false);

    const visibleState = State(
        'unvisible__form',
        'visible__form',
    );

    const changeVisible = (newKey = '0') => {
        if (newKey === '0') {
            setDefaultValues();
        }
        setMasterKey(newKey);
        visibleState.switchState();
        changeVisibleFields();
    };

    const changeVisibleFields = async () => {
        timer.cancel();
        toggle.switchState();
        toggle.getState() ? addFields() : removeFields();
    };

    const pause = async (ms) => {
        let timer = later(ms);
        setTimer(timer);
        return timer.promise;
    }


    const addFields = async () => {
        for (let field of fields) {
            let label = field.getLabel();
            if (!labels.includes(label)) {
                await pause(50);
                field.changeVisible();
                labels.push(label);
            }
        }
        setLabel(labels);
    };

    const removeFields = async () => {
        let newFields = fields.reverse();
        for (let field of newFields) {
            let label = field.getLabel();
            if (labels.includes(label)) {
                await pause(50);
                field.changeVisible();
                labels.splice(labels.indexOf(label), 1);
            }
        }
        setLabel(labels);
    };

    const getVisible = () => {
        return visibleState.getState();
    };

    const setDefaultValues = () => {
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].getLabel() !== 'Buttons') {
                fields[i].setValue('');
            }
        }
    }

    const setValues = (values) => {
        for (let i = 0; i < values.length; i++) {
            fields[i].setValue(values[i]);
        }
    }

    const getValues = () => {
        const values = [];

        fields.forEach(field => {
            if (field.getLabel() !== 'Buttons') {
                values.push(field.getValue());
            }
        });

        return values;
    }

    const render = (drawIt = '', placesWrapper = '') => (
        <>
            <form
                className={getVisible()}
                id={id}
                action='#'
                method='post'
            >
                <ul>
                    {fields.map((field) => {
                        return (
                            <li key={field.getKey()} className={field.getVisible()}>
                                {field.render(changeVisible, drawIt, placesWrapper, getValues, masterKey)}
                            </li>
                        );
                    })}
                </ul>
            </form>
        </>
    );

    return { changeVisible, changeVisibleFields, getVisible, render, getValues, setValues };
};
