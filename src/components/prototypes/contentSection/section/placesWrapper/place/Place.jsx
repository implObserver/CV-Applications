import { FieldsHandler } from "../../../../form/fieldsHandler/FieldsHandler";
import '../../../../../../styles/PlacesWrapper.css'

export const Place = ({ props, parameters }) => {
    console.log(parameters)
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
            console.log(inputs[i][1])
            inputs[i][1].setState(values[i].getState())
        }
    }

    return (
        <>
            <div key={parameters.getKey()} className="place" onClick={clickHandler}>
                <span>{values[0].getState()}</span>
            </div>
        </>
    )
}