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
            addedSections: ['personalDetails', 'education', 'experience'],
        },
        defaultStates: {
            sectionVisible: { value: 'visible__section' },
        }

    }

    return sections;
}