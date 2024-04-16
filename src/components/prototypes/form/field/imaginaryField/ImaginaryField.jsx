import { useFieldContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { Ref } from "../../../ref/Ref";
import { State } from "../../../state/State";
import { ButtonsWrapper } from "../../buttonsWrapper/ButtonsWrapper";
import { Field } from "../Field";

export const ImaginaryField = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    const ref = Ref(['unvisible__field', 'visible__field']);
    const style = State('unvisible__field', 'visible__field');

    Object.assign(props.forms[parameters.formId].objects.fieldsStyles, { [parameters.field.id]: style });
    Object.assign(props.forms[parameters.formId].objects.fieldsRefs, { [parameters.field.id]: ref });

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
