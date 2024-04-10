import { later } from "../../../../helper/Timeout";

export const LineFiller = () => {
    let timer = later(1);

    let elementsStyles;
    let addedElements;
    let speed;

    const setElements = (styles, added, time = 100) => {
        elementsStyles = styles;
        addedElements = added;
        speed = time;
    }

    const pause = async (ms) => {
        timer = later(ms);
        return timer.promise;
    }

    const changeVisibleElements = async (key) => {
        timer.cancel();
        const promise = key ? addElements() : removeElements();
        return await promise;
    };

    const addElements = async () => {
        for (const style of elementsStyles) {
            if (!addedElements.includes(style[0])) {
                addedElements.push(style[0])
                style[1].switchState();
                await pause(speed);
            }
        }
        return
    };

    const removeElements = async () => {
        addedElements = firstTimeAdded();
        elementsStyles.reverse()
        for (const style of elementsStyles) {
            if (addedElements.includes(style[0])) {
                addedElements.pop(style[0])
                style[1].switchState();
                await pause(speed);
            }
        }
        return
    }

    const firstTimeAdded = () => {
        if (addedElements.length === 0) {
            let elements = Object.values(elementsStyles);
            let buff = [];
            elements.forEach(element => {
                buff.push(element[0]);
            })
            addedElements = [...buff];
        }
        return addedElements;
    }

    return { changeVisibleElements, setElements }
};