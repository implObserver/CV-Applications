import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Input = ({ parameters, id }) => {
    const value = State('');
    const props = Props.states[id];

    Object.assign(props.inputs, { [parameters.id]: value });

    const inputHandler = (e) => {
        console.log(Props.states.resumeUpdater)
        console.log(props.id)
        console.log(props.activePlace.getKey())
        console.log(parameters.index)
        Props.states.resumeUpdater[props.id][props.activePlace.getKey()][parameters.index].setState(e.target.value);
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