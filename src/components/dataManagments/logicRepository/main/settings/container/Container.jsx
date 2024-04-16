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
                ref: {},
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
                ref: {},
                layoutColor: {},
            },
            defaultStates: {
                parameterVisible: { value: 'unvisible__parameter' },
            }
        },
        dropdownLists: {},
    }
    const prototype = Prototype(object);
    Object.assign(object.parameters.styles.colors, { layoutColor: {} });
    prototype.addDropDownList('sections', 'visible__section');
    prototype.addDropDownList('parameters', 'unvisible__parameter');

    return Object.assign({ functions: prototype }, object);
}