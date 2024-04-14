import { appModel } from "../../../../../main";
import { DropdownListsHandlers } from "../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../handlerFabric/formHandlers/FormHandlers";

export const ClosePattern = async (id) => {
    const props = appModel.settings.container.sections[id];
    await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(false);
    props.forms[`${props.id}__form`].states.formStyle.switchClass();
    DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(true);
    props.states.buttonRef.switchClass();
    props.dropdownLists[`${props.id}__places`].states.containerRef.switchClass();
}