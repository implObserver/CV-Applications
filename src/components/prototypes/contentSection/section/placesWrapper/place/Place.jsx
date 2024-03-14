export const Place = (inputValues) => {
    let values = inputValues;

    const key = generateKey('Place');

    const update = (inputValues) => {
        values = inputValues;
    }

    const render = (drawIt, form) => (
        <>
            <div className="place" onClick={() => {
                drawIt('form');
                form.changeVisible(key);
                form.setValues(values);
            }}> <span>{values[0]}</span></div>
        </>
    )

    return { render, update, key };
}

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
}