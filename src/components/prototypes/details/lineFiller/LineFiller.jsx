import { later } from "../../../../helper/Timeout";

export const LineFiller = (elementsStyles, addedElements) => {
    let timer = later(1);
    let speed = 100;

    const pause = async (ms) => {
        timer = later(ms);
        return timer.promise;
    }

    const updateParameters = (styles, added, time = 100) => {
        elementsStyles = styles;
        addedElements = added;
        speed = time;
    }

    const changeVisibleElements = async (key) => {
        timer.cancel();
        return key ? addElements() : removeElements();
    };

    const addElements = async () => {
        for (const style of elementsStyles) {
            if (!addedElements.includes(style[0])) {
                addedElements.push(style[0])
                style[1].switchState();
                await pause(speed);
            }
        }
        return addedElements;
    };

    const removeElements = async () => {
        elementsStyles.reverse()
        for (const style of elementsStyles) {
            if (addedElements.includes(style[0])) {
                addedElements.pop(style[0])
                style[1].switchState();
                await pause(speed);
            }
        }
        return addedElements;
    }

    return { changeVisibleElements, updateParameters }
};