import { State } from "../../../../../prototypes/toggle/Toggle";
import { ResumeUpdater } from "../../../../ResumeUpdater";

export const NumberPhone = ({ props }) => {
    const activePlace = props.states.personalDetails.activePlace;
    const update = State(activePlace.getValues()[2]);
    Object.assign(ResumeUpdater[props.states.personalDetails.id][activePlace.getKey()], { numberPhone: update });

    return (
        <>
            <div className='number__phone'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}