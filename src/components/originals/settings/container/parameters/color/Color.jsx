import { appModel } from "../../../../../../main";
import { State } from "../../../../../prototypes/state/State";
import { ColorBody } from "./body/Body";
import { ColorHead } from "./head/Head";

export const Color = () => {
    const style = State('unvisible__parameter', 'visible__parameter');
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles, { color: style });
    
    return (
        <div className={`color ${style.getState()}`}>
            <ColorHead></ColorHead>
            <ColorBody></ColorBody>
        </div>
    )
}