import { appModel } from "../../../main";
import { DropdownListsHandlers } from "../../prototypes/handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { deletePlace } from "../../prototypes/settings/container/contentSection/section/handlers/PlaceHandler";

export const Clear = () => {
    const sections = ['education', 'experience'];
    appModel.resume.updater.update.switchState();

    sections.forEach(async (id) => {
        clearHead();
        await DropdownListsHandlers.placesHandlers[`${id}__places`].switchVisible(false);
        deletePlaces(id);
    }) 
}

const deletePlaces = (id) => {
    const placesKeys = Object.keys(appModel.settings.container.sections[id].dropdownLists[`${id}__places`].objects.elementsRefs);
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