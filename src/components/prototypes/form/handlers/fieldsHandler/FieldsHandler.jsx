import { later } from "../../../../../helper/Timeout";

export const FieldsHandler = (() => {
    let timer = later(1);

    const pause = async (ms) => {
        timer = later(ms);
        return timer.promise;
    }

    const changeVisibleFields = async (props, key) => {
        timer.cancel();
        key ? addFields(props) : removeFields(props);
    };

    const addFields = async (props) => {
        await pause(1);
        const fieldsStyles = Object.entries(props.states.fieldsStyles);
        const addedFields = props.addedFields;
        for (const style of fieldsStyles) {
            if (!addedFields.includes(style[0])) {
                props.addedFields.push(style[0])
                style[1].switchState();
                await pause(50);
            }
        }
    };

    const removeFields = async (props) => {
        const fieldsStyles = Object.entries(props.states.fieldsStyles).reverse();
        const addedFields = props.addedFields;
        for (const style of fieldsStyles) {
            if (addedFields.includes(style[0])) {
                props.addedFields.pop(style[0])
                style[1].switchState();
                await pause(50);
            }
        }
    }

    return { changeVisibleFields }
})();