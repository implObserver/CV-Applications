import { State } from "../../../../../prototypes/toggle/Toggle";
import { ResumeUpdater } from "../../../../ResumeUpdater";

export const Mail = ({ props }) => {
    const activePlace = props.states.personalDetails.activePlace;
    const update = State(activePlace.getValues()[1]);
    Object.assign(ResumeUpdater[props.states.personalDetails.id][activePlace.getKey()], { mail: update });

    return (
        <>
            <div className='mail'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}