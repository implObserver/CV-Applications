import { later } from "../../helper/Timeout";
import { FieldsHandler } from "./fieldsHandler/FieldsHandler";

export const ClosePattern = async (props) => {
    props.states.blockHead.setState('block');
    FieldsHandler.changeVisibleFields(props, false);
    await later(500).promise
    props.states.drawnNode.setState('button');
    await later(10).promise
    props.states.placesStyle.switchState();
    props.states.buttonStyle.switchState();
    props.states.blockHead.setState('');
}