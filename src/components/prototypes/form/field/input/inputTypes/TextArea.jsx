import { appModel } from "../../../../../../main";
import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../state/State";

export const Area = () => {
    const value = State('');
    const props = usePropsContext();
    const parameters = useFieldContext();

    Object.assign(props.forms[parameters.formId].objects.inputs, { [parameters.field.id]: value });
    const areaHandler = (e) => {
        if (props.dropdownLists[`${props.id}__places`].objects.activeElement !== 'new') {
            console.log(appModel.resume.updater[props.id])
            appModel.resume.updater[props.id][props.dropdownLists[`${props.id}__places`].objects.activeElement.getKey()][parameters.field.index].setState(e.target.value);
        }
        value.setState(e.target.value);
    }

    return (
        <>
            <textarea
                id={parameters.field.id}
                name={parameters.field.name}
                className='field'
                placeholder={parameters.field.placeholder}
                value={value.getState()} onInput={areaHandler}
            />
        </>
    );
}