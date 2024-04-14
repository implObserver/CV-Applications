import { getDropDownList } from "../elements/DropDownList";
import { getForm } from "../elements/Form";

export const Prototype = (object) => {
    const addForm = (id) => {
        const form = getForm(id);
        Object.assign(object.forms, { [id]: form });
    }

    const addDropDownList = (id, defaultVal = '') => {
        console.log(defaultVal)
        const list = getDropDownList(id, defaultVal);
        Object.assign(object.dropdownLists, { [id]: list });
    }

    return { addForm, addDropDownList };
}