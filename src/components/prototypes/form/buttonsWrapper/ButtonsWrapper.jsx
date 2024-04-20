import { useFieldContext } from "../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../dataManagments/context/PropsContext";
import { Cancel } from "./buttons/Cancel";
import { Delete } from "./buttons/Delete";
import { Save } from "./buttons/Save";

export const ButtonsWrapper = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    const state = props.forms[parameters.formId].objects.fieldsStyles[parameters.field.id].getState();

    return (
        <>
            <li className={`buttons ${state}`}>
                <Delete></Delete>
                <Save></Save>
                <Cancel></Cancel>
            </li>
        </>
    );
}