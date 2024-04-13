import { Prototype } from "../../../base/Prototype";
import { getSection } from "../../../elements/Section";
import { getStyles } from "../../../elements/Styles";

export const Container = () => {
    const object = {
        resumeLoader: {},
        sections: {
            states: {
                open: {},
                drawnNode: {},
            },
            personalDetails: getSection('personalDetails'),
            education: getSection('education'),
            experience: getSection('experience'),
            defaultStates: {
                sectionVisible: { value: 'visible__section' },
            }
        },

        parameters: {
            styles: getStyles(),
            states: {
                layoutColor: {},
            },
            defaultStates: {
                parameterVisible: { value: 'unvisible__parameter' },
            }
        },
        dropdownLists: {},
    }
    const prototype = Prototype(object);

    prototype.addDropDownList('sections');
    prototype.addDropDownList('parameters');

    return Object.assign({ functions: prototype }, object);
}