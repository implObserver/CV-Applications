import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Input = () => {
    const value = State('');
    const props = usePropsContext();
    const parameters = useFieldContext();

    Object.assign(props.inputs, { [parameters.id]: value });

    const inputHandler = (e) => {
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