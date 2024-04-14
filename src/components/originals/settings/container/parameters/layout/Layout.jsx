import { appModel } from "../../../../../../main";
import { Ref } from "../../../../../prototypes/ref/Ref";
import { LayoutBody } from "./body/Body";
import { LayoutHead } from "./head/Head";


export const Layout = () => {
    const ref = Ref(['unvisible__parameter', 'visible__parameter']);

    Object.assign(appModel.settings.container.dropdownLists.parameters.objects.elementsRefs, { layout: ref });

    return (
        <>
            <div ref={ref.getRef()} className={`layout ${ref.getClass()}`}>
                <LayoutHead></LayoutHead>
                <LayoutBody></LayoutBody>
            </div>
        </>
    )
}