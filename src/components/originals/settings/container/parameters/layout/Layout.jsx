import { appModel } from "../../../../../../main";
import { State } from "../../../../../prototypes/state/State";
import { LayoutBody } from "./body/Body";
import { LayoutHead } from "./head/Head";


export const Layout = () => {
    const style = State('unvisible__parameter', 'visible__parameter');
    
    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsStyles, { layout: style });

    return (
        <>
            <div className={`layout ${style.getState()}`}>
                <LayoutHead></LayoutHead>
                <LayoutBody></LayoutBody>
            </div>
        </>
    )
}