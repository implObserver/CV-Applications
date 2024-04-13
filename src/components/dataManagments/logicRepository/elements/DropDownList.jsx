import { Prototype } from "../base/Prototype";

export const getDropDownList = (id) => {
    const list = {
        id: id,
        elementCounter: 0,
        states: {
            elementsStyle: {},
        },
        objects: {
            activeElement: 'new',
            addedElements: [],
            elements: [],
            elementsStyles: {},
        },
        defaultStates: {
            elementStyle: { value: 'unvisible__place' },
        },
    }

    if (id === 'sections') {
        list.objects.addedElements.push('personalDetails');
        list.objects.addedElements.push('education');
        list.objects.addedElements.push('experience');
    }

    //const parentId = id.split('_')[0]
    //const elements = Object.values(defaultPlaces[parentId]);
    //console.log(elements)

    //elements.forEach(element => {
    //const defaultElement = getIdealElement(id, element);
    //list.objects.elements.push(defaultElement);
    // });

    const prototype = Prototype(list);

    return Object.assign(list, { functions: prototype });
}

//const getIdealElement = (id, props) => {
//let idealElement;
//if (id.indexOf('places') !== -1) {
//idealElement = IdealPlace(id, `${id}__form`, props);
//}
//}