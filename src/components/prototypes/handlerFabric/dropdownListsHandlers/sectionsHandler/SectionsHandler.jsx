import { appModel } from "../../../../../main";
import { LineFiller } from "../../../details/lineFiller/LineFiller";

export const getSectionsHandler = () => {
    const prototype = LineFiller();
    const switchVisible = async (key) => {
        const props = appModel.settings.container.dropdownLists.sections;
        const elementsStyles = Object.entries(props.objects.elementsStyles);
        const addedElements = props.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements, 199)
        return await prototype.changeVisibleElements(key);
    }
    return { switchVisible };
}