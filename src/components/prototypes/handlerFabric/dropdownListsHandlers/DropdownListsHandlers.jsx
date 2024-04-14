import { getParametersHandler } from "./parametersHandler/ParametersHandler";
import { getPlacesHandler } from "./placesHandler/PlacesHandler";
import { getSectionsHandler } from "./sectionsHandler/SectionsHandler";

export const DropdownListsHandlers = (() => {
    const handlers = {
        placesHandlers: {},
        sectionsHandler: getSectionsHandler(),
        parametersHandler: getParametersHandler(),
    }

    const addPlacesHandler = (listId, props) => {
        const handler = getPlacesHandler(props);
        Object.assign(handlers.placesHandlers, { [listId]: handler });
    }
    return Object.assign(handlers, { functions: { addPlacesHandler } });
})();