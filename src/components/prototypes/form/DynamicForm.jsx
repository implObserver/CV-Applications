import { useCallback, useEffect, useMemo, useState } from 'react';
import { State } from '../toggle/Toggle';
import { generateKey } from '../../helper/KeyGenerator';
import { Field } from './field/Field';
import { later } from '../../helper/Timeout';

/*export const DynamicForm = (id, fields) => {
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
}; */

export const DynamicForm = ({ props, id, fields }) => {
    const toggle = State(true, false);

    const fill = fields.map((field) => {
        Object.assign(props.states, { formStyle: toggle });
        return <Field key={generateKey(field.id)} props={props} parameters={field} id={id}></Field>;
    })

    return useMemo(() => (
        <>
            <form
                className={`${toggle.getState() ? 'visible__form' : 'unvisible__form'} ${props.states.drawnNode.getState() === 'button' ? 'disabled' : ''}`}
                id={id}
                action='#'
                method='post'
            >
                {(() => {
                    if (id === 'details__form') {
                        return (
                            <>
                                <h2>Personal Details</h2>
                            </>
                        )
                    }
                })()}
                <ul>
                    {fill}
                </ul>
            </form>
        </>
    ), [fill, id, props.states, toggle]);
};

export const FieldHandler = () => {
    const pause = async (ms) => {
        let timer = later(ms);
        return timer.promise;
    }


    const addFields = async (props) => {
        await pause(50);
        const fieldsStyles = Object.entries(props.states.fieldsStyles);
        const addedFields = props.addedFields;
        for (const style of fieldsStyles) {
            if (!addedFields.includes(style[0])) {
                console.log(style[1])
                props.addedFields.push(style[0])
                style[1].switchState();
                let timeout = later(50);
                await timeout.promise;
            }
        }
    };

    return { addFields }
}