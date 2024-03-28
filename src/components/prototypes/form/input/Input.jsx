import { ResumeUpdater } from "../../../dataManagments/stateTemplates/ResumeUpdater";
import { State } from "../../state/State";

export const Input = ({ props, parameters }) => {
    const value = State('');
    Object.assign(props.inputs, { [parameters.id]: value });



    const inputHandler = (e) => {
        console.log(ResumeUpdater[props.id][props.activePlace.getKey()][parameters.index])
        ResumeUpdater[props.id][props.activePlace.getKey()][parameters.index].setState(e.target.value);
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