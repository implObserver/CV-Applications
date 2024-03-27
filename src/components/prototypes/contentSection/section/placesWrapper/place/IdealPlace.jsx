import { generateKey } from "../../../../../helper/KeyGenerator";

export const IdealPlace = (props, defaultPlace = '') => {
    console.log(defaultPlace)
    props.placeCounter++;
    const inputs = Object.entries(props.inputs);
    const key = generateKey(`${props.id}-${props.placeCounter}`)

    const setValues = (inputs) => {
        const values = [];
        inputs.forEach(input => {
            values.push(input[1].getState());
        })

        return values;
    }

    let values = defaultPlace === '' ? setValues(inputs) : defaultPlace;

    const update = () => {
        const inputs = Object.entries(props.inputs);
        values = setValues(inputs);
    }

    const getValues = () => {
        return values;
    }

    const getKey = () => {
        return key;
    }

    return { update, getValues, getKey }

}