import { later } from "../../../../../helper/Timeout";
import { Props } from "../../../../dataManagments/props/Global";
import { FieldsHandler } from "../fieldsHandler/FieldsHandler";

export const ClosePattern = async (id) => {
    const props = Props.states[id];
    return FieldsHandler.changeVisibleFields(props, false);
}