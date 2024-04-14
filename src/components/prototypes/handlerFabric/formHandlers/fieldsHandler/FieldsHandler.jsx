import { LineFillerV2 } from "../../../details/lineFiller/LineFiller";

export const getFieldsHandler = (props) => {
    const prototype = LineFillerV2();
    const switchVisible = async (key) => {
        const elementsStyles = Object.entries(props.objects.fieldsRefs);
        const addedElements = props.objects.addedFields;
        prototype.updateParameters(elementsStyles, addedElements, 50)
        return await prototype.changeVisibleElements(key);
    }
    return { switchVisible };
}