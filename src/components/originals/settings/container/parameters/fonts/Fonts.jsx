import { appModel } from "../../../../../../main";
import { State } from "../../../../../prototypes/state/State";
import { FontsBody } from "./body/Body";
import { FontsHead } from "./head/Head";

export const Fonts = () => {
    const style = State('unvisible__parameter', 'visible__parameter');
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles, { fonts: style });

    return (
        <div className={`fonts ${style.getState()}`}>
            <FontsHead></FontsHead>
            <FontsBody></FontsBody>
        </div>
    )
}