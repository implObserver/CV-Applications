import { appModel } from "../../../../../main";
import { DropdownListsHandlers } from "../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../handlerFabric/formHandlers/FormHandlers";

export const ClosePattern = async (id) => {
    const props = appModel.settings.container.sections[id];
    props.activeElement = 'place';
    await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(false);
    props.dropdownLists[`${props.id}__places`].states.containerStyle.switchState();
    DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(true);
    props.states.buttonStyle.switchState();
}


export const fillForm = (form, values) => {
    const inputs = Object.entries(form.objects.inputs);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i][1].setState(values[i])
    }
}