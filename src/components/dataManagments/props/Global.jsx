import { getSectionStateTemplate } from "../stateTemplates/DynamicSection";

export const Props = (() => {
    const props = {
        states: {
            personalDetails: getSectionStateTemplate('personalDetails'),
            education: getSectionStateTemplate('education'),
            experience: getSectionStateTemplate('experience'),
            resumeUpdater: {},
        },
    }

    return props;
})();
