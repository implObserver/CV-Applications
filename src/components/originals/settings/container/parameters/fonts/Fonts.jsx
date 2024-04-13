import { appModel } from "../../../../../../main";
import { State } from "../../../../../prototypes/state/State";
import { FontsBody } from "./body/Body";
import { FontsHead } from "./head/Head";

export const Fonts = () => {
    const isVisible = State('unvisible__parameter', 'visible__parameter', appModel.settings.container.parameters.defaultStates.parameterVisible);
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles, { fonts: isVisible });

    return (
        <div className={`fonts ${isVisible.getState()}`}>
            <FontsHead></FontsHead>
            <FontsBody></FontsBody>
        </div>
    )
}