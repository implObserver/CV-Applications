export const getSectionStateTemplate = (id) => {
    const section = {
        id: id,
        placeCounter: 0,
        states: {
            open: {},
            drawnNode: {},
            fieldsStyles: {},
            placesStyle: '',
        },
        objects: {
            activePlace: 'new',
            addedFields: [],
            inputs: {},
            places: [],
        },
        defaultStates: {
            open: { value: false },
            drawnNode: { value: 'button' },
            fieldsStyles: { value: {} },
            placesStyle: { value: 'unvisible__places-wrapper' },
            buttonStyle: { value: 'unvisible__button-wrapper' },
            field: { value: 'unvisible__field' },
        }
    }

    return section;
}