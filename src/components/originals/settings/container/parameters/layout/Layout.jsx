import { appModel } from "../../../../../../main";
import { State } from "../../../../../prototypes/state/State";
import { LayoutBody } from "./body/Body";
import { LayoutHead } from "./head/Head";


export const Layout = () => {
    const isVisible = State('unvisible__parameter', 'visible__parameter', appModel.settings.container.parameters.defaultStates.parameterVisible);
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles, { layout: isVisible });

    return (
        <>
            <div className={`layout ${isVisible.getState()}`}>
                <LayoutHead></LayoutHead>
                <LayoutBody></LayoutBody>
            </div>
        </>
    )
}