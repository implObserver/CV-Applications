import { appModel } from "../../../../../../main";
import { State } from "../../../../../prototypes/state/State";
import { ColorBody } from "./body/Body";
import { ColorHead } from "./head/Head";

export const Color = () => {
    const isVisible = State('unvisible__parameter', 'visible__parameter', appModel.settings.container.parameters.defaultStates.parameterVisible);
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles, { color: isVisible });
    console.log(isVisible.getState())
    return (
        <div className={`color ${isVisible.getState()}`}>
            <ColorHead></ColorHead>
            <ColorBody></ColorBody>
        </div>
    )
}