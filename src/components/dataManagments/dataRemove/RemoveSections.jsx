import { DropdownListsHandlers } from "../../prototypes/handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { deletePlace } from "../../prototypes/settings/container/contentSection/section/handlers/PlaceHandler";
import { Props } from "../props/Global"

export const removeSections = () => {
    const sections = ['education', 'experience'];

    sections.forEach(async (id) => {
        await DropdownListsHandlers.placesHandlers[`${id}__places`].switchVisible(false);
        deletePlaces(id);
    })
}

const deletePlaces = (id) => {

    const placesKeys = Object.keys(Props.states[id].dropdownLists[`${id}__places`].objects.elementsStyles);
    placesKeys.forEach(key => {
        console.log(key)
        deletePlace(Props.states[id], key);
    })
}