import { generateKey } from "../../../../../../../../helper/KeyGenerator";

export const IdealPlace = (list, form, defaultPlace = '') => {
    list.elementCounter++;
    const formId = form.id;
    const inputs = Object.entries(form.objects.inputs);

    let key = generateKey(`${formId}-${list.elementCounter}`);
    if (formId === 'personalDetails__form') {
        key = 'personalDetails__form-1';
    }
    
    const setValues = (inputs) => {
        const values = [];
        inputs.forEach(input => {
            values.push(input[1].getState());
        })
        return values;
    }

    let values = defaultPlace === '' ? setValues(inputs) : defaultPlace;

    const update = (form) => {
        const inputs = Object.entries(form.objects.inputs);
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