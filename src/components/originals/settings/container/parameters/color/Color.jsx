import { appModel } from "../../../../../../main";
import { Ref } from "../../../../../prototypes/ref/Ref";
import { ColorBody } from "./body/Body";
import { ColorHead } from "./head/Head";

export const Color = () => {
    const ref = Ref(['unvisible__parameter', 'visible__parameter']);
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsRefs, { color: ref });

    return (
        <div ref={ref.getRef()} className={`color ${ref.getClass()}`}>
            <ColorHead></ColorHead>
            <ColorBody></ColorBody>
        </div>
    )
}