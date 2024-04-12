import { Props } from "../../../../../../dataManagments/props/Global";


export const deleteActivePlace = (id) => {
    const props = Props.states[id];
    const activePlace = props.objects.activePlace;
    deletePlace(props, activePlace.getKey());
}

export const deletePlace = (props, key) => {
    console.log(`WTFFF`)
    let places = props.dropdownLists[`${props.id}__places`].objects.elements;
    for (let i = 0; i < places.length; i++) {
        console.log(`key: ${places[i].getKey()} : keyIn ${key}`)
        if (places[i].getKey() === key) {
            props.dropdownLists[`${props.id}__places`].objects.elements.splice(i, 1);
            props.dropdownLists[`${props.id}__places`].objects.addedElements.splice(i, 1);
            Props.states.resumeUpdater[props.id].trigger.switchState();
            delete props.dropdownLists[`${props.id}__places`].objects.elementsStyles[key];
        }
    }
}