import { useState } from "react";

export const Field = (name) => {
    const [visible, setVisible] = useState('unvisible__field')
    const key = setKey(name);

    const changeVisible = () => {
        setVisible(visible === 'unvisible__field' ? 'visible__field' : 'unvisible__field');
    }

    const getVisible = () => {
        return visible;
    }

    const isVisible = () => {
        return visible === 'visible__field';
    }

    const getKey = () => {
        return key;
    }

    return { changeVisible, isVisible, getVisible, getKey }
}

const setKey = (name) => {
    let key = '';
    for (let i = 0; i < name.length; i++) {
        key += name[i].charCodeAt();
    }
    return key;
}