import { LineFiller } from "../../../details/lineFiller/LineFiller";

export const getPlacesHandler = (props) => {
    const prototype = LineFiller();
    const switchVisible = async (key) => {
        const elementsStyles = Object.entries(props.objects.elementsStyles);
        const addedElements = props.objects.addedElements;
        prototype.updateParameters(elementsStyles, addedElements);
        return await prototype.changeVisibleElements(key);
    }
    return { switchVisible };
}