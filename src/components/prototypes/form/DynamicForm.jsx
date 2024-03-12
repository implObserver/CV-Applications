import { useState } from 'react';
import { later } from '../../helper/Timeout';
import { Toggle } from '../toggle/Toggle';

export const DynamicForm = (id, fields) => {
    const [keys, setKeys] = useState([]);
    const [timer, setTimer] = useState(later(50));

    const toggle = Toggle(true, false);

    const visibleState = Toggle(
        'unvisible__form',
        'visible__form',
    );

    const changeVisible = () => {
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
            let key = field.getKey();
            if (!keys.includes(key)) {
                await pause(50);
                field.changeVisible();
                keys.push(field.getKey());
            }
        }
        setKeys(keys);
    };

    const removeFields = async () => {
        let newFields = fields.reverse();
        for (let field of newFields) {
            let key = field.getKey();
            if (keys.includes(key)) {
                await pause(50);
                field.changeVisible();
                keys.splice(keys.indexOf(key), 1);
            }
        }
        setKeys(keys);
    };

    const getVisible = () => {
        return visibleState.getState();
    };

    const render = (drawIt = '') => (
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
                                {field.render(changeVisible, drawIt)}
                            </li>
                        );
                    })}
                </ul>
            </form>
        </>
    );

    return { changeVisible, changeVisibleFields, getVisible, render };
};
