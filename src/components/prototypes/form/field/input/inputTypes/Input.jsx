import { appModel } from "../../../../../../main";
import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../state/State";

export const Input = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    console.log(props.forms[parameters.formId].objects.inputs[parameters.field.id] === undefined)
    const defaultValue = props.forms[parameters.formId].objects.inputs[parameters.field.id] === undefined
        ? ''
        : props.dropdownLists[`${props.id}__places`].objects.activeElement === 'new'
            ? ''
            : props.forms[parameters.formId].objects.inputs[parameters.field.id];

    const value = State(defaultValue === '' ? defaultValue : defaultValue.getState());

    Object.assign(props.forms[parameters.formId].objects.inputs, { [parameters.field.id]: value });

    const inputHandler = (e) => {
        if (props.dropdownLists[`${props.id}__places`].objects.activeElement !== 'new') {
            appModel.resume.updater[props.id][props.dropdownLists[`${props.id}__places`].objects.activeElement.getKey()][parameters.field.index].setState(e.target.value);
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