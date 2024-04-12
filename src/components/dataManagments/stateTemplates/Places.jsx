export const getDropDownList = (id) => {
    const placesContainer = {
        id: id,
        elementCounter: 0,
        states: {
            elementsStyle: {},
        },
        objects: {
            activeElement: 'new',
            addedElements: [],
            elements: [],
            elementsStyles: {},
        },
        defaultStates: {
            elementStyle: { value: 'unvisible__place' },
        }
    }

    return placesContainer;
}