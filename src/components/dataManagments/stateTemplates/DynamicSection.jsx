export const getSectionStateTemplate = (id) => {
    const section = {
        id: id,
        placeCounter: 0,
        states: {
            open: {},
            drawnNode: {},
            placesStyle: '',
        },
        objects: {
            activePlace: 'new',
            addedFields: [],
            addedPlaces: [],
            inputs: {},
            fields: {},
            places: [],
            placesStyles: {},
        },
        defaultStates: {
            open: { value: false },
            drawnNode: { value: 'button' },
            fieldsStyles: { value: {} },
            placesStyle: { value: 'unvisible__places-wrapper' },
            buttonStyle: { value: 'unvisible__button-wrapper' },
            field: { value: 'unvisible__field' },
            place: { value: 'unvisible__place' },
        }
    }

    return section;
}