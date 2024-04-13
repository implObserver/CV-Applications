import { Prototype } from "../../base/Prototype";
import { getStyles } from "../../elements/Styles";
import { getUpdater } from "../../elements/Updater";

export const Resume = () => {
    const object = {
        styles: getStyles(),
        updater: getUpdater(),
    }
    const prototype = Prototype(object);
    return Object.assign({ functions: prototype }, object);
}