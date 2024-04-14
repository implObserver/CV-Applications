import { appModel } from "../../../../../../../main";


export const deleteActivePlace = (id) => {
    const props = appModel.settings.container.sections[id];
    const activePlace = props.dropdownLists[`${props.id}__places`].objects.activeElement;
    deletePlace(props, activePlace.getKey());
}

export const deletePlace = (props, key) => {
    let places = props.dropdownLists[`${props.id}__places`].objects.elements;
    for (let i = 0; i < places.length; i++) {
        if (places[i].getKey() === key) {
            props.dropdownLists[`${props.id}__places`].objects.elements.splice(i, 1);
            props.dropdownLists[`${props.id}__places`].objects.addedElements.splice(i, 1);
            appModel.resume.updater[props.id].trigger.switchState();
            delete props.dropdownLists[`${props.id}__places`].objects.elementsRefs[key];
        }
    }
}