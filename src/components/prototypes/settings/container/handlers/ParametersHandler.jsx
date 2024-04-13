import { appModel } from "../../../../../main";
import { LineFillerV2 } from "../../../details/lineFiller/LineFiller";

export const ParametersHandler = (() => {
    const prototype = LineFillerV2();
    const fillOfParameters = async (key) => {
        const elementsStyles = Object.entries(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles);
        const addedElements = appModel.settings.container.dropdownLists.parameters.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements)
        return await prototype.changeVisibleElements(key);
    }

    return { fillOfParameters };

    
})();