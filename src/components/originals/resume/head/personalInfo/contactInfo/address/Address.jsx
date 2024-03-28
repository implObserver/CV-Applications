import { State } from "../../../../../../prototypes/state/State";
import { ResumeUpdater } from "../../../../../../dataManagments/stateTemplates/ResumeUpdater";

export const Address = ({ props }) => {
    const activePlace = props.states.personalDetails.activePlace;
    const update = State(activePlace.getValues()[3]);
    Object.assign(ResumeUpdater[props.states.personalDetails.id][activePlace.getKey()], { address: update });

    return (
        <>
            <div className='address'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}