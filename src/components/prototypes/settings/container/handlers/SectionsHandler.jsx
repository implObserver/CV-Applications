import { appModel } from "../../../../../main";
import { LineFillerV2 } from "../../../details/lineFiller/LineFiller";

export const SectionHandler = (() => {
    const prototype = LineFillerV2();
    const fillOfSections = async (key) => {
        const elementsStyles = Object.entries(appModel.settings.container.dropdownLists.sections.objects.elementsStyles);
        const addedElements = appModel.settings.container.dropdownLists.sections.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements, 500)
        return await prototype.changeVisibleElements(key);
    }

    return { fillOfSections };
})();