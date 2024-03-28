import { generateKey } from "../../../helper/KeyGenerator";

let counter = 0;

export const getSectionStateTemplate = (id) => {
    counter++;
    const section = {
        id: id,
        states: {
            open: {},
            drawnNode: {},
            fieldsStyles: {}
        },
        addedFields: [],
        removedFields: [],
        inputs: {},
        places: [],
        resumeSections: [],
        activePlace: 'new',
        placeCounter: 0,
        counter: counter,
        key: generateKey(counter),
    }

    return section;
}