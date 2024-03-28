import { State } from "../../state/State";
import { ButtonsWrapper } from "../buttonsWrapper/ButtonsWrapper";
import { Field } from "./Field";

export const ImaginaryField = ({ props, parameters, id }) => {
    const style =
        id === 'details__form'
            ? State('visible__field', 'unvisible__field')
            : State('unvisible__field', 'visible__field');

    Object.assign(props.states.fieldsStyles, { [parameters.id]: style });
    return (
        <>
            {(() => {
                if (parameters.id === 'Buttons') {
                    return <ButtonsWrapper props={props} parameters={parameters} id={id}></ButtonsWrapper>
                } else {
                    return <Field props={props} parameters={parameters} id={id}></Field>;
                }
            })()}
        </>
    )
}
