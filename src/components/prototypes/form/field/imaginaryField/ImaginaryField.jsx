import { Props } from "../../../../dataManagments/props/Global";
import { State } from "../../../state/State";
import { ButtonsWrapper } from "../../buttonsWrapper/ButtonsWrapper";
import { Field } from "../Field";

export const ImaginaryField = ({ parameters, id }) => {
    const props = Props.states[id];

    const style =
        id === 'personalDetails'
            ? State('visible__field', 'unvisible__field')
            : State('unvisible__field', 'visible__field');

    Object.assign(props.states.fieldsStyles, { [parameters.id]: style });

    return (
        <>
            {(() => {
                if (parameters.id === 'Buttons') {
                    return <ButtonsWrapper parameters={parameters} id={id}></ButtonsWrapper>
                } else {
                    return <Field parameters={parameters} id={id}></Field>;
                }
            })()}
        </>
    )
}
