import { State } from "../../../../../prototypes/state/State"
import { appModel } from "../../../../../../main";

export const FullName = () => {
    const props = appModel.settings.container.sections.personalDetails;
    const activePlace = props.dropdownLists[`${props.id}__places`].objects.activeElement;
    
    const update = State(activePlace.getValues()[0]);

    Object.assign(appModel.resume.updater[props.id][activePlace.getKey()], { fullName: update });
    return (
        <>
            <div className="full__name">
                <h1>{update.getState()}</h1>
            </div>
        </>
    )
}