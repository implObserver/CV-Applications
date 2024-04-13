import { later } from "../../../../helper/Timeout";


export const LineFillerV2 = (elementsStyles, addedElements) => {
    let timer = later(1);
    let speed = 150;

    const pause = async (ms) => {
        timer = later(ms);
        return timer.promise;
    }

    const updateParameters = (styles, added, time = 150) => {
        elementsStyles = styles;
        addedElements = added;
        speed = time;
    }

    const changeVisibleElements = async (key) => {
        timer.cancel();
        return key ? addElements() : removeElements();
    };

    const addElements = async () => {
        //console.log('FUCK')
        //console.log(`add elementsStyles IN: ${elementsStyles}`)
        //console.log(`----------`)
        //console.log(`add addedElements IN: ${addedElements}`)
        for (const style of elementsStyles) {
            if (!addedElements.includes(style[0])) {
                addedElements.push(style[0])
                console.log(style)
                //console.log(addedElements)
                style[1].switchState();
                await pause(speed);
            }
        }
        //console.log(`----------`)
        //console.log(`add elementsStyles out: ${elementsStyles}`)
        //console.log(`----------`)
        //console.log(`add addedElements out: ${addedElements}`)
        //console.log(`----------`)
        return addedElements;
    };

    const removeElements = async () => {
        //console.log(`++++++++++++++`)
        //console.log(`remove elementsStyles IN: ${elementsStyles}`)
        //console.log(`++++++++++++++`)
        //console.log(`remove addedElements IN: ${addedElements}`)
        elementsStyles.reverse()
        for (const style of elementsStyles) {
            if (addedElements.includes(style[0])) {
                addedElements.pop(style[0])
                console.log(style[0])
                //console.log(addedElements)
                style[1].switchState();
                await pause(speed);
            }
        }
        //console.log(`++++++++++++++`)
        //console.log(`remove elementsStyles out: ${elementsStyles}`)
        //console.log(`++++++++++++++`)
        //console.log(`remove addedElements out: ${addedElements}`)
        //console.log(`++++++++++++++`)
        return addedElements;
    }

    return { changeVisibleElements, updateParameters }
};