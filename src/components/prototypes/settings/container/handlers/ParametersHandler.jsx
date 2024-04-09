import { later } from "../../../../../helper/Timeout";
import { Props } from "../../../../dataManagments/props/Global";
import { LineFiller } from "../../../details/lineFiller/LineFiller";

export const ParametersHandler = (() => {
    const prototype = LineFiller();
    const fillOfParameters = async (key) => {
        await later(1).promise
        const sectionsStyles = Object.entries(Props.states.parameters.objects.parametersStyles);
        const addedSections = Props.states.parameters.objects.addedParameters;
        prototype.setElements(sectionsStyles, addedSections);
        return prototype.changeVisibleElements(key);
    }

    return { fillOfParameters };
})();