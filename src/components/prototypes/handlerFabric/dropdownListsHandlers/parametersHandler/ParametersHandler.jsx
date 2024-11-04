import { appModel } from "../../../../../main";
import { LineFiller } from "../../../details/lineFiller/LineFiller";

export const getParametersHandler = () => {
    const prototype = LineFiller();
    const switchVisible = async (key) => {
        const props = appModel.settings.container.dropdownLists.parameters;
        const elementsStyles = Object.entries(props.objects.elementsStyles);
        const addedElements = props.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements)
        prototype.changeVisibleElements(key);
    }
    return { switchVisible };
}