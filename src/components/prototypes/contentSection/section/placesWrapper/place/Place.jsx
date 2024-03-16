import { generateKey } from "../../../../../helper/KeyGenerator";

export const Place = (inputValues) => {
    let values = inputValues;

    const key = generateKey('Place');

    const update = (inputValues) => {
        values = inputValues;
    }

    return (
        <>
            <div key={key} className="place" onClick={() => {
                //drawIt('form');
                //form.changeVisible(key);
                //form.setValues(values);
            }}> <span>{values[0]}</span></div>
        </>
    )
}