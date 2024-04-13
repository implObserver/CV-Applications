import { generateKey } from "../../../../../../../../helper/KeyGenerator";
import { appModel } from "../../../../../../../../main";

export const IdealPlace = (id, formId, defaultPlace = '') => {
    const props = appModel.settings.container.sections[id];
    const form = props.forms[formId];
    props.placeCounter++;
    const inputs = Object.entries(form.objects.inputs);
    const key = generateKey(`${form.id}-${props.placeCounter}`)

    const setValues = (inputs) => {
        const values = [];
        inputs.forEach(input => {
            values.push(input[1].getState());
        })

        return values;
    }

    let values = defaultPlace === '' ? setValues(inputs) : defaultPlace;

    const update = () => {
        const inputs = Object.entries(props.forms[formId].objects.inputs);
        values = setValues(inputs);
    }

    const getValues = () => {
        return values;
    }

    const getKey = () => {
        return key;
    }

    return { update, getValues, getKey, formId }

}