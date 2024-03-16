import { useState } from "react";

export const Input = ({ props }) => {
    const [input, setInput] = useState('');

    return (
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
    );
}