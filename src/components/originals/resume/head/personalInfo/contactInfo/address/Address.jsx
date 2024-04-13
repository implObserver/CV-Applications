import { State } from "../../../../../../prototypes/state/State";
import { appModel } from "../../../../../../../main";

export const Address = () => {
    const props = appModel.settings.container.sections.personalDetails;
    const activePlace = props.dropdownLists[`${props.id}__places`].objects.activeElement;
    const update = State(activePlace.getValues()[3]);

    Object.assign(appModel.resume.updater[props.id][activePlace.getKey()], { address: update });

    return (
        <>
            <div className='address'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}