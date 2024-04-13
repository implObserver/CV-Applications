import { State } from "../../../../../../prototypes/state/State";
import { appModel } from "../../../../../../../main";

export const Mail = () => {
    const props = appModel.settings.container.sections.personalDetails;
    const activePlace = props.dropdownLists[`${props.id}__places`].objects.activeElement;
    const update = State(activePlace.getValues()[1]);

    Object.assign(appModel.resume.updater[props.id][activePlace.getKey()], { mail: update });

    return (
        <>
            <div className='mail'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}