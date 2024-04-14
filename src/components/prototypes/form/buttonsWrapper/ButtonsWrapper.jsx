import { useFieldContext } from "../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../dataManagments/context/PropsContext";
import { Cancel } from "./buttons/Cancel";
import { Delete } from "./buttons/Delete";
import { Save } from "./buttons/Save";

export const ButtonsWrapper = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    return (
        <>
            <li ref={props.forms[parameters.formId].objects.fieldsRefs[parameters.field.id].getRef()} className={`buttons`}>
                <Delete></Delete>
                <Save></Save>
                <Cancel></Cancel>
            </li>
        </>
    );
}