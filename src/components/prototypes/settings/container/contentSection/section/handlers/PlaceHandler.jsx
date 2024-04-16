import { appModel } from "../../../../../../../main";


export const deleteActivePlace = (id) => {
    const props = appModel.settings.container.sections[id];
    const list = props.dropdownLists[`${props.id}__places`];
    const activePlace = list.objects.activeElement;

    deletePlace(props, activePlace.getKey());
}

export const deletePlace = (props, key) => {
    const list = props.dropdownLists[`${props.id}__places`];
    const places = list.objects.elements;
    for (let i = 0; i < places.length; i++) {
        if (places[i].getKey() === key) {
            list.objects.elements.splice(i, 1);
            list.objects.addedElements.splice(i, 1);
            appModel.resume.updater[props.id].trigger.switchState();
            delete list.objects.elementsStyles[key];
        }
    }
}