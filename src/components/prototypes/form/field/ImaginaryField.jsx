import { State } from "../../toggle/Toggle";
import { ButtonsWrapper } from "../buttonsWrapper/ButtonsWrapper";
import { Field } from "./Field";

export const ImaginaryField = ({ props, parameters, id }) => {
    console.log(`~~~~~~${parameters.id}`)
    const style =
        id === 'details__form'
            ? State('visible__field', 'unvisible__field')
            : State('unvisible__field', 'visible__field');

    Object.assign(props.states.fieldsStyles, { [parameters.id]: style });

    return (
        <>
            {(() => {
                if (parameters.id === 'Buttons') {
                    return <ButtonsWrapper props={props} parameters={parameters}></ButtonsWrapper>
                } else if (parameters.id === 'Description') {
                    return <></>
                } else {
                    return <Field props={props} parameters={parameters}></Field>;
                }
            })()}
        </>
    )
}
