import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { FontsBody } from "./body/Body";
import { FontsHead } from "./head/Head";

export const Fonts = () => {
    const isVisible = State('unvisible__parameter', 'visible__parameter', Props.states.parameters.defaultStates.parameterVisible);
    Object.assign(Props.states.parameters.objects.parametersStyles.fonts, isVisible);

    return (
        <div className={`fonts ${isVisible.getState()}`}>
            <FontsHead></FontsHead>
            <FontsBody></FontsBody>
        </div>
    )
}