import { useState } from "react";

export const Area = () => {
    const [area, setArea] = useState('');

    const getValue = () => {
        return area;
    }

    const setValue = (value) => {
        setArea(value);
    }

    const render = (props) => (
        <>
            <textarea
                id={props.id}
                name={props.name}
                className='field'
                placeholder={props.placeholder}
                value={area} onInput={e => setArea(e.target.value)}
            />
        </>
    )

    return { render, getValue, setValue };
}