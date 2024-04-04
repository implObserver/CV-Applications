export const getSectionsContainer = () => {
    const sections = {
        states: {
            drawnNode: {},
        },
        objects: {
            sectionsStyles: {
                personalDetails: {},
                education: {},
                experience: {},
            },
            addedSections: []
        },
        defaultStates: {
            sectionVisible: { value: 'visible__section' },
        }

    }

    return sections;
}