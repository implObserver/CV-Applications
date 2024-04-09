import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { ColorBody } from "./body/Body";
import { ColorHead } from "./head/Head";

export const Color = () => {
    const isVisible = State('unvisible__parameter', 'visible__parameter', Props.states.parameters.defaultStates.parameterVisible);
    Object.assign(Props.states.parameters.objects.parametersStyles.color, isVisible);

    return (
        <div className={`color ${isVisible.getState()}`}>
            <ColorHead></ColorHead>
            <ColorBody></ColorBody>
        </div>
    )
}