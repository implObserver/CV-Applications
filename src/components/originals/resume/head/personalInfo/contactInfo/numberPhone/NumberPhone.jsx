import { State } from "../../../../../../prototypes/state/State";
import { appModel } from "../../../../../../../main";

export const NumberPhone = () => {
    const props = appModel.settings.container.sections.personalDetails;
    const activePlace = props.dropdownLists[`${props.id}__places`].objects.activeElement;
    const update = State(activePlace.getValues()[2]);

    Object.assign(appModel.resume.updater[props.id][activePlace.getKey()], { numberPhone: update });

    return (
        <>
            <div className='number__phone'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}