import { useRef } from "react";

export const Ref = (classes, memory = { value: classes[0] }) => {
    console.log(memory.value)
    const ref = useRef();
    let currentClass = memory.value;

    const switchClass = () => {
        if (currentClass === classes[0]) {
            ref.current.classList.remove(classes[0]);
            ref.current.classList.add(classes[1]);
            currentClass = classes[1];
        } else {
            ref.current.classList.remove(classes[1]);
            ref.current.classList.add(classes[0]);
            currentClass = classes[0];
        }
        memory.value = currentClass;
    };

    const getClass = () => {
        return currentClass;
    };

    const getRef = () => {
        return ref;
    }

    return { switchClass, getClass, getRef };
};