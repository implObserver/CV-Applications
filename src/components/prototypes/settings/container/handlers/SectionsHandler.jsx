import { later } from "../../../../../helper/Timeout";
import { Props } from "../../../../dataManagments/props/Global";
import { LineFiller } from "../../../details/lineFiller/LineFiller";

export const SectionHandler = (() => {
    const prototype = LineFiller();
    const fillOfSections = async (key) => {
        await later(1).promise
        const sectionsStyles = Object.entries(Props.states.sections.objects.sectionsStyles);
        const addedSections = Props.states.sections.objects.addedSections;
        prototype.setElements(sectionsStyles, addedSections);
   
    }

    return { fillOfSections };
})();