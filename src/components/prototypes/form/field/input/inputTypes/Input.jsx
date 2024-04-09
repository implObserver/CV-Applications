import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Input = () => {
    const props = usePropsContext();
    const fieldParameters = useFieldContext();

    const defaultValue = props.objects.inputs[fieldParameters.id] === undefined
        ? ''
        : props.objects.activePlace === 'new'
            ? ''
            : props.objects.inputs[fieldParameters.id];

    const value = State(defaultValue === '' ? defaultValue : defaultValue.getState());

    Object.assign(props.objects.inputs, { [fieldParameters.id]: value });

    const inputHandler = (e) => {
        if (props.objects.activePlace !== 'new') {
            Props.states.resumeUpdater[props.id][props.objects.activePlace.getKey()][fieldParameters.index].setState(e.target.value);
        }
        value.setState(e.target.value);
    }

    return (
        <>
            <input
                type={fieldParameters.type}
                id={fieldParameters.id}
                name={fieldParameters.name}
                placeholder={fieldParameters.placeholder}
                className='field'
                maxLength={fieldParameters.maxLength}
                minLength={fieldParameters.minLength}
                pattern={fieldParameters.pattern}
                value={value.getState()} onInput={inputHandler}
            />
        </>
    );
}