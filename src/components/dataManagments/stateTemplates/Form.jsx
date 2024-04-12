export const getFormStateTemplate = (id, defaultValues) => {
    const form = {
        id: id,
        placeCounter: 0,
        states: {

        },
        objects: {
            addedFields: [],
            inputs: {},
            fields: {},
        },
        defaultStates: {
            field: { value: defaultValues[0] },
        }
    }
    console.log(id)
    console.log('fuuck')
    return form;
}