import { Prototype } from "../base/Prototype"
import { Resume } from "./resume/Resume";
import { Settings } from "./settings/Settings";

export const AppModel = () => {
    const object = {
        settings: Settings(),
        resume: Resume(),
    }
    const prototype = Prototype(object);
    return Object.assign({ functions: prototype }, object);
}