export const getSectionStateTemplate = () => {
    const section = {
        states: {
            open: {},
            drawnNode: {},
            fieldsStyles: {}
        },
        addedFields: [],
        removedFields: [],
        inputs: {},
    }

    return section;
}