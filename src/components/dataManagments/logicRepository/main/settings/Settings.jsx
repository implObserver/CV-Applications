import { Prototype } from "../../base/Prototype";
import { Container } from "./container/Container";
import { Sidebar } from "./sidebar/Sidebar";

export const Settings = () => {
    const object = {
        sidebar: Sidebar(),
        container: Container(),
    }
    const prototype = Prototype(object);
    return Object.assign({ functions: prototype }, object);
}