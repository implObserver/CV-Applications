import { getDropDownList } from "../elements/DropDownList";
import { getForm } from "../elements/Form";

export const Prototype = (object) => {
    const addForm = (id) => {
        const form = getForm(id);
        Object.assign(object.forms, { [id]: form });
    }

    const addDropDownList = (id) => {
        const list = getDropDownList(id);
        Object.assign(object.dropdownLists, { [id]: list });
    }

    return { addForm, addDropDownList };
}