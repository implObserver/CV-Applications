import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Input = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    const defaultValue = props.forms[parameters.formId].objects.inputs[parameters.field.id] === undefined
        ? ''
        : props.objects.activePlace === 'new'
            ? ''
            : props.forms[parameters.formId].objects.inputs[parameters.field.id];

    const value = State(defaultValue === '' ? defaultValue : defaultValue.getState());

    Object.assign(props.forms[parameters.formId].objects.inputs, { [parameters.field.id]: value });

    const inputHandler = (e) => {
        if (props.objects.activePlace !== 'new') {
            Props.states.resumeUpdater[props.id][props.objects.activePlace.getKey()][parameters.field.index].setState(e.target.value);
        }
        value.setState(e.target.value);
    }

    return (
        <>
            <input
                type={parameters.field.type}
                id={parameters.field.id}
                name={parameters.field.name}
                placeholder={parameters.field.placeholder}
                className='field'
                maxLength={parameters.field.maxLength}
                minLength={parameters.field.minLength}
                pattern={parameters.field.pattern}
                value={value.getState()} onInput={inputHandler}
            />
        </>
    );
}