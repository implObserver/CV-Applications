import { useState } from 'react';
import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';

export const ExperienceForm = () => {
    const fields = [School(), Degree(), StartDate(), EndDate(), Location()];
    const [toggle, setToggle] = useState(true);
    const [visible, setVisible] = useState('unvisible__form');
    const [keys, setKeys] = useState([]);

    const changeVisible = () => {
        setVisible(visible === 'visible__form' ? 'unvisible__form' : 'visible__form');
    }

    const timeout = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const changeVisibleFields = async () => {
        setToggle(!toggle);
        changeVisible();
        toggle ? addFields() : removeFields();
    }

    const addFields = async () => {
        for (let field of fields) {
            let key = field.getKey();
            console.log(field)
            if (!keys.includes(key)) {
                await timeout(50);
                field.changeVisible();
                keys.push(field.getKey());
            }
        }
        setKeys(keys);
    }

    const removeFields = async () => {
        let newFields = fields.reverse();
        for (let field of newFields) {
            let key = field.getKey();
            if (keys.includes(key)) {
                await timeout(50);
                field.changeVisible();
                keys.splice(keys.indexOf(key), 1);
            }
        }
        setKeys(keys);
    }

    const render = () => (
        <>
            <form className={visible} id='experience__form' action='#' method='post'>
                <ul>
                    {fields.map((field) => {
                        return <li key={field.getKey()} className={field.getVisible()}>
                            {field.render}
                        </li>
                    })}
                </ul>
            </form>
        </>
    );

    return { render, changeVisibleFields }
};