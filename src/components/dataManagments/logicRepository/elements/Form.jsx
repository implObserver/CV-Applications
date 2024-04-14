import { Prototype } from "../base/Prototype"

export const getForm = (id) => {
    const form = {
        id: id,
        placeCounter: 0,
        states: {

        },
        objects: {
            addedFields: [],
            inputs: {},
            fields: {},
            fieldsRefs: {},
        },
        defaultStates: {
            field: { value: 'unvisible__field' },
        }
    }

    const prototype = Prototype(form);

    return Object.assign(form, { functions: prototype });
}