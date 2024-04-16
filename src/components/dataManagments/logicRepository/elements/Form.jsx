import { Prototype } from "../base/Prototype"

export const getForm = (id) => {
    const form = {
        id: id,
        placeCounter: 0,
        states: {
            wrapperStyle: {},
        },
        objects: {
            addedFields: [],
            inputs: {},
            fields: {},
            fieldsRefs: {},
            fieldsStyles: {},
        },
        defaultStates: {
            field: { value: 'unvisible__field' },
        }
    }
    console.log('ebal')
    const prototype = Prototype(form);

    return Object.assign(form, { functions: prototype });
}