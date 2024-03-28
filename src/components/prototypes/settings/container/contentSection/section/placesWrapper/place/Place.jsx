import { FieldsHandler } from "../../../../../../form/handlers/fieldsHandler/FieldsHandler";
import '../../../../../../../../styles/PlacesWrapper.css'
import { Props } from "../../../../../../../dataManagments/props/Global";

export const Place = ({ parameters, id }) => {
    const props = Props.states[id];
    const values = parameters.getValues();

    const clickHandler = () => {
        props.activePlace = parameters;
        props.states.drawnNode.setState('form');
        const key = props.states.open.getState();
        FieldsHandler.changeVisibleFields(props, key);
        setTimeout(() => {
            fillForm();
        }, 1);

    }

    const fillForm = () => {
        const inputs = Object.entries(props.inputs);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i][1].setState(values[i])
        }
    }

    return (
        <>
            <div className="place" onClick={clickHandler}>
                <span>{values[0]}</span>
            </div>
        </>
    )
}