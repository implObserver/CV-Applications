import { ResumeUpdater } from "../../../resume/ResumeUpdater";
import { State } from "../../toggle/Toggle";

export const Input = ({ props, parameters }) => {
    const value = State('');
    Object.assign(props.inputs, { [parameters.id]: value });

    const inputHandler = (e) => {
        ResumeUpdater[parameters.id].setState(e.target.value);
        value.setState(e.target.value);
    }

    return (
        <>
            <input
                type={parameters.type}
                id={parameters.id}
                name={parameters.name}
                placeholder={parameters.placeholder}
                className='field'
                maxLength={parameters.maxLength}
                minLength={parameters.minLength}
                pattern={parameters.pattern}
                value={value.getState()} onInput={inputHandler}
            />
        </>
    );
}