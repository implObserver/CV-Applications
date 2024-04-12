import { later } from "../../../../../helper/Timeout";
import { Props } from "../../../../dataManagments/props/Global";
import { DropdownListsHandlers } from "../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../handlerFabric/formHandlers/FormHandlers";

export const ClosePattern = async (id) => {
    const props = Props.states[id];
    await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(false);
    props.states.drawnNode.setState('button');
    await later(1).promise;
    DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(true);
}