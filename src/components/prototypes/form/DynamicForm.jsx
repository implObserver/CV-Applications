import { useState } from "react";
import { timeout } from "../../helper/Timeout";

export const DynamicForm = (fields) => {
    const changeVisible = () => {
        setVisible(visible === 'visible__form' ? 'unvisible__form' : 'visible__form');
        changeVisibleFields();
    }

    const changeVisibleFields = async () => {
        setToggle(!toggle);
        toggle ? addFields() : removeFields();
    }

    const [toggle, setToggle] = useState(true);
    const [keys, setKeys] = useState([]);
    const [visible, setVisible] = useState('unvisible__form');

    const addFields = async () => {
        for (let field of fields) {
            let key = field.getKey();
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

    const getVisible = () => {
        return visible;
    }

    return { changeVisible, changeVisibleFields, getVisible }
}