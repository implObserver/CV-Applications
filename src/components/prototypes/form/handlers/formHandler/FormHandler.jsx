import { later } from "../../../../../helper/Timeout";
import { appModel } from "../../../../../main";
import { DropdownListsHandlers } from "../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../handlerFabric/formHandlers/FormHandlers";

export const ClosePattern = async (id) => {
    const props = appModel.settings.container.sections[id];
    await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(false);
    props.states.drawnNode.setState('button');
    await later(1).promise;
    DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(true);
    props.states.buttonStyle.switchState();
    props.dropdownLists[`${props.id}__places`].states.elementsStyle.switchState();
}