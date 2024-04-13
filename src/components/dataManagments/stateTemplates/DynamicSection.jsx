import { getFormStateTemplate } from "./Form";
import { getDropDownList } from "./Places";

export const getSectionStateTemplate = (id) => {
    const section = {
        id: id,
        placeCounter: 0,
        states: {
            open: {},
            drawnNode: {},
            placesStyle: '',
        },
        forms: {

        },
        dropdownLists: {

        },
        defaultStates: {
            open: { value: false },
            personalOpen: { value: true },
            drawnNode: { value: 'button' },
            fieldsStyles: { value: {} },
            placesStyle: { value: 'unvisible__places-wrapper' },
            buttonStyle: { value: 'unvisible__button-wrapper' },
            field: { value: 'unvisible__field' },
            place: { value: 'unvisible__place' },
        }
    }

    const addForm = (id, defaultValues) => {
        const form = getFormStateTemplate(id, defaultValues);
        Object.assign(section.forms, { [id]: form });
    }

    const addDropDownList = (id, defaultValues) => {
        const list = getDropDownList(id, defaultValues);
        Object.assign(section.dropdownLists, { [id]: list });
    }

    return Object.assign(section, { functions: { addForm, addDropDownList } });
}