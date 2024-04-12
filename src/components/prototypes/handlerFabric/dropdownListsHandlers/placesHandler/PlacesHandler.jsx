import { LineFillerV2 } from "../../../details/lineFiller/LineFiller";

export const getPlacesHandler = (props) => {
    const prototype = LineFillerV2();
    const switchVisible = async (key) => {
        const elementsStyles = Object.entries(props.objects.elementsStyles);
        const addedElements = props.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements)
        return await prototype.changeVisibleElements(key);
    }
    return Object.assign(prototype, { switchVisible });
}