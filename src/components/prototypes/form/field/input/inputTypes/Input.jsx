import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Input = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();

    const defaultValue = props.objects.inputs[parameters.id] === undefined
        ? ''
        : props.objects.activePlace === 'new'
            ? ''
            : props.objects.inputs[parameters.id].getState();

    const value = State(defaultValue);

    Object.assign(props.objects.inputs, { [parameters.id]: value });

    const inputHandler = (e) => {
        if (props.objects.activePlace !== 'new') {
            Props.states.resumeUpdater[props.id][props.objects.activePlace.getKey()][parameters.index].setState(e.target.value);
        }
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