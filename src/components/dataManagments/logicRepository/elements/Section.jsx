import { Prototype } from "../base/Prototype";

export const getSection = (id) => {
    const section = {
        id: id,
        activeElement: 'place',
        placeCounter: 0,
        states: {
            open: {},
            drawnNode: {},
        },
        forms: {},
        dropdownLists: {},
        defaultStates: {
            open: { value: false },
        },
    }

    const prototype = Prototype(section);
    prototype.addForm(`${id}__form`);
    prototype.addDropDownList(`${id}__places`, 'unvisibled__place');

    return Object.assign(section, { functions: prototype });
}