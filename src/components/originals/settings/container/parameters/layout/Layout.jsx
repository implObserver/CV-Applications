import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../../prototypes/state/State";
import { LayoutBody } from "./body/Body";
import { LayoutHead } from "./head/Head";


export const Layout = () => {
    const isVisible = State('unvisible__parameter', 'visible__parameter', Props.states.parameters.defaultStates.parameterVisible);
    Object.assign(Props.states.parameters.objects.parametersStyles.layout, isVisible);
    return (
        <>
            <div className={`layout ${isVisible.getState()}`}>
                <LayoutHead></LayoutHead>
                <LayoutBody></LayoutBody>
            </div>
        </>
    )
}