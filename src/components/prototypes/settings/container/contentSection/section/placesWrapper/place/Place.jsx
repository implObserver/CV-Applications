import { FieldsHandler } from "../../../../../../form/handlers/fieldsHandler/FieldsHandler";
import '../../../../../../../../styles/PlacesWrapper.css'
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../../state/State";
import { PlacesHandler } from "../../handlers/PlacesHandler";


export const Place = ({ parameters }) => {
    const props = usePropsContext();
    const values = parameters.getValues();
    console.log('place')
    const style = State('unvisible__place', 'visible__place', props.defaultStates.place);

    Object.assign(props.objects.placesStyles, { [parameters.getKey()]: style });

    const clickHandler = () => {
        props.objects.activePlace = parameters;
        props.states.placesStyle.switchState();
        props.states.buttonStyle.switchState();
        props.states.drawnNode.setState('form');
        PlacesHandler.fillOfPlaces(props, false);
        FieldsHandler.fillOfFields(props, true);
        setTimeout(() => {
            fillForm();
        }, 1);
    }

    const fillForm = () => {
        const inputs = Object.entries(props.objects.inputs);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i][1].setState(values[i])
        }
    }

    return (
        <>
            <div className={`place ${style.getState()}`} onClick={clickHandler}>
                <span>{values[0]}</span>
            </div>
        </>
    )
}