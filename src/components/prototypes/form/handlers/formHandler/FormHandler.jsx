import { later } from "../../../../../helper/Timeout";
import { Props } from "../../../../dataManagments/props/Global";
import { PlacesHandler } from "../../../settings/container/contentSection/section/handlers/PlacesHandler";
import { FieldsHandler } from "../fieldsHandler/FieldsHandler";

export const ClosePattern = async (id) => {
    const props = Props.states[id];
    FieldsHandler.fillOfFields(props, false);
    await later(500).promise;
    props.states.drawnNode.setState('button');
    await later(10).promise;
    PlacesHandler.fillOfPlaces(props, true);
    props.states.placesStyle.switchState();
    props.states.buttonStyle.switchState();
}