import { appModel } from "../../../../../main";
import { LineFillerV2 } from "../../../details/lineFiller/LineFiller";

export const getSectionsHandler = () => {
    const prototype = LineFillerV2();
    const switchVisible = async (key) => {
        const props = appModel.settings.container.dropdownLists.sections;
        const elementsStyles = Object.entries(props.objects.elementsRefs);
        const addedElements = props.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements, 199)
        return await prototype.changeVisibleElements(key);
    }
    return { switchVisible };
}