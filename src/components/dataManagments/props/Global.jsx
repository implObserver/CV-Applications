import { getSectionStateTemplate } from "../stateTemplates/DynamicSection";
import { getSectionsContainer } from "../stateTemplates/SectionsContainer";

export const Props = (() => {
    const props = {
        states: {
            sections: getSectionsContainer(),
            personalDetails: getSectionStateTemplate('personalDetails'),
            education: getSectionStateTemplate('education'),
            experience: getSectionStateTemplate('experience'),
            resumeUpdater: {},
        },
    }
    console.log(props)
    return props;
})();
