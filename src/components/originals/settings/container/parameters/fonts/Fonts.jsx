import { appModel } from "../../../../../../main";
import { Ref } from "../../../../../prototypes/ref/Ref";
import { FontsBody } from "./body/Body";
import { FontsHead } from "./head/Head";

export const Fonts = () => {
    const ref = Ref(['unvisible__parameter', 'visible__parameter']);
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsRefs, { fonts: ref });

    return (
        <div ref={ref.getRef()} className={`fonts ${ref.getClass()}`}>
            <FontsHead></FontsHead>
            <FontsBody></FontsBody>
        </div>
    )
}