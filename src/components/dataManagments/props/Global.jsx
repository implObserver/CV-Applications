import { getSectionStateTemplate } from "../stateTemplates/DynamicSection";
import { getParametersStatesTemplate } from "../stateTemplates/Parameters";
import { getDropDownList } from "../stateTemplates/Places";
import { getResumeUpdater } from "../stateTemplates/ResumeUpdater";
import { getSectionsContainer } from "../stateTemplates/SectionsContainer";

export const Props = (() => {
    const props = {
        states: {
            sections: getSectionsContainer(),
            personalDetails: getSectionStateTemplate('personalDetails'),
            education: getSectionStateTemplate('education'),
            experience: getSectionStateTemplate('experience'),
            parameters: getParametersStatesTemplate(),
            resumeUpdater: getResumeUpdater(),
            dropdownLists: {},
        },
    }

    const addDropDownList = (id, defaultValues) => {
        const list = getDropDownList(id, defaultValues);
        Object.assign(props.states.dropdownLists, { [id]: list });
    }

    console.log(props)
    return Object.assign(props, { functions: { addDropDownList } });
})();
