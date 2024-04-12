import { getPlacesHandler } from "./placesHandler/PlacesHandler";

export const DropdownListsHandlers = (() => {
    const handlers = {
        placesHandlers: {

        },
    }

    const addPlacesHandler = (listId, props) => {
        const handler = getPlacesHandler(props);
        Object.assign(handlers.placesHandlers, { [listId]: handler });
    }

    return Object.assign(handlers, { functions: { addPlacesHandler } });
})();