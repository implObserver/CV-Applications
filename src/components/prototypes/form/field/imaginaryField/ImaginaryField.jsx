import { useFieldContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { State } from "../../../state/State";
import { ButtonsWrapper } from "../../buttonsWrapper/ButtonsWrapper";
import { Field } from "../Field";

export const ImaginaryField = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    const style = State('unvisible__field', 'visible__field', props.forms[parameters.formId].defaultStates.field);

    Object.assign(props.forms[parameters.formId].objects.fieldsStyles, { [parameters.field.id]: style });

    return (
        <>
            {(() => {
                if (parameters.field.id === 'Buttons') {
                    return <ButtonsWrapper></ButtonsWrapper>
                } else {
                    return <Field></Field>;
                }
            })()}
        </>
    )
}
