import { generateKey } from "../../../../../helper/KeyGenerator";

export const IdealPlace = (props) => {
    console.log(props)
    const inputs = Object.entries(props.inputs);
    const key = generateKey('place')

    const setValues = (inputs) => {
        const values = [];
        inputs.forEach(input => {
            values.push(input[1]);
        })

        return values;
    }

    let values = setValues(inputs);

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