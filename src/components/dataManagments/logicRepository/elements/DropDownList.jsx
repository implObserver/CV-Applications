import { Prototype } from "../base/Prototype";

export const getDropDownList = (id, defaultStyle = '') => {
    const list = {
        id: id,
        elementCounter: 0,
        states: {
            elementsStyle: {},
            containerRef: {},
        },
        objects: {
            activeElement: 'new',
            addedElements: [],
            elements: [],
            elementsStyles: {},
            elementsRefs: {},
        },
        defaultStates: {
            elementStyle: { value: defaultStyle },
        },
    }

    if (id === 'sections') {
        list.objects.addedElements.push('personalDetails');
        list.objects.addedElements.push('education');
        list.objects.addedElements.push('experience');
    }

    const prototype = Prototype(list);

    return Object.assign(list, { functions: prototype });
}