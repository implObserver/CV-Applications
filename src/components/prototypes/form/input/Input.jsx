import { useState } from "react";

export const Input = () => {
    const [input, setInput] = useState('');

    const getValue = () => {
        return input;
    }

    const setValue = (value) => {
        setInput(value);
    }

    const render = (props) => (
        <>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                className='field'
                maxLength={props.maxLength}
                minLength={props.minLength}
                pattern={props.pattern}
                value={input} onInput={e => setInput(e.target.value)}
            />
        </>
    )

    return { render, getValue, setValue };
}