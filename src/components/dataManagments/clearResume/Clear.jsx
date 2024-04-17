import { appModel } from "../../../main";
import { ClosePattern } from "../../prototypes/form/handlers/formHandler/FormHandler";
import { DropdownListsHandlers } from "../../prototypes/handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { deletePlace } from "../../prototypes/settings/container/contentSection/section/handlers/PlaceHandler";

export const Clear = () => {
    const sections = ['education', 'experience'];

    sections.forEach(async (id) => {
        clearHead();
        await DropdownListsHandlers.placesHandlers[`${id}__places`].switchVisible(false);
        deletePlaces(id);
        if (appModel.settings.container.sections[id].activeElement === 'form') {
            ClosePattern(id);
        }
        appModel.settings.container.sections[id].dropdownLists[`${id}__places`].objects.activeElement = 'new';
        console.log(appModel)
    })

    appModel.resume.updater.update.switchState();
}

const deletePlaces = (id) => {
    const placesKeys = Object.keys(appModel.settings.container.sections[id].dropdownLists[`${id}__places`].objects.elementsStyles);
    placesKeys.forEach(key => {
        deletePlace(appModel.settings.container.sections[id], key);
    })
}

const clearHead = () => {
    const inputs = Object.values(appModel.settings.container.sections.personalDetails.forms['personalDetails__form'].objects.inputs);
    const props = appModel.settings.container.sections.personalDetails;
    const fields = Object.values(appModel.resume.updater[props.id][props.dropdownLists[`${props.id}__places`].objects.activeElement.getKey()]);
    inputs.forEach(input => {
        input.setState('');
    })
    fields.forEach(field => {
        field.setState('');
    })
}