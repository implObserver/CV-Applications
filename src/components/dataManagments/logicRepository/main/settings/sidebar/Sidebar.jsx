import { Prototype } from "../../../base/Prototype";

export const Sidebar = () => {
    const object = {
        content: {},
        customize: {},
    }
    const prototype = Prototype(object);
    return Object.assign({ functions: prototype }, object);
}