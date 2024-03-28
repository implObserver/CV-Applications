export const getSectionStateTemplate = (id) => {
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
    }

    return section;
}