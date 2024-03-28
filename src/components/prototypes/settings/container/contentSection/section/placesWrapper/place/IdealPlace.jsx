import { generateKey } from "../../../../../../../../helper/KeyGenerator";
import { Props } from "../../../../../../../dataManagments/props/Global";

export const IdealPlace = (id, defaultPlace = '') => {
    const props = Props.states[id];
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