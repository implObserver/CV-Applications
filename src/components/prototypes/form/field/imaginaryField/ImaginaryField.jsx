import { useFieldContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { State } from "../../../state/State";
import { ButtonsWrapper } from "../../buttonsWrapper/ButtonsWrapper";
import { Field } from "../Field";

export const ImaginaryField = () => {
    const props = usePropsContext();
    const parameters = useFieldContext();
    console.log(props)
    
    const style =
        props.id === 'personalDetails'
            ? State('visible__field', 'unvisible__field')
            : State('unvisible__field', 'visible__field', props.defaultStates.field);
    
    Object.assign(props.objects.fields, { [parameters.id]: style });
    return (
        <>
            {(() => {
                if (parameters.id === 'Buttons') {
                    return <ButtonsWrapper></ButtonsWrapper>
                } else {
                    return <Field></Field>;
                }
            })()}
        </>
    )
}
