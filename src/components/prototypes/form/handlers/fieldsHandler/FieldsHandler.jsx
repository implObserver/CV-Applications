import { later } from "../../../../../helper/Timeout";
import { LineFiller } from "../../../details/lineFiller/LineFiller";

export const FieldsHandler = (() => {
    const prototype = LineFiller();
    const fillOfFields = async (props, key) => {
        await later(1).promise
        const fieldsStyles = Object.entries(props.objects.fields);
        const addedFields = props.objects.addedFields;
        prototype.setElements(fieldsStyles, addedFields,50);
        prototype.changeVisibleElements(key);
    }

    return { fillOfFields };
})();