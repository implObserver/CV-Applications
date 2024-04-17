import { appModel } from "../../../../../main";
import { DropdownListsHandlers } from "../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../handlerFabric/formHandlers/FormHandlers";

export const ClosePattern = async (id) => {
    const props = appModel.settings.container.sections[id];
    await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(false);
    props.activeElement = 'place';
    props.dropdownLists[`${props.id}__places`].states.containerStyle.switchState();
    DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(true);
    props.states.buttonStyle.switchState();
    FillForm(props.forms[`${props.id}__form`]);
}


export const FillForm = (form, values = Array(10).fill('')) => {
    const inputs = Object.entries(form.objects.inputs);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i][1].setState(values[i])
    }
}

export const FillResumeSection = (section, values) => {
    const fields = Object.values(appModel.resume.updater[section.id][section.dropdownLists[`${section.id}__places`].objects.activeElement.getKey()]);
    for (let i = 0; i < fields.length; i++) {
        fields[i].setState(values[i]);
    }
}