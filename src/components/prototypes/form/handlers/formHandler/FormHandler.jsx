import { later } from "../../../../../helper/Timeout";
import { Props } from "../../../../dataManagments/props/Global";
import { PlacesHandler } from "../../../settings/container/contentSection/section/handlers/PlacesHandler";
import { FieldsHandler } from "../fieldsHandler/FieldsHandler";

export const ClosePattern = async (id) => {
    const props = Props.states[id];
    console.log('ddd')
    FieldsHandler.changeVisibleFields(props, false);
    //PlacesHandler.changeVisiblePlaces(props, true);
    await later(500).promise;
    props.states.drawnNode.setState('button');
    await later(10).promise;
    props.states.placesStyle.switchState();
    props.states.buttonStyle.switchState();
}