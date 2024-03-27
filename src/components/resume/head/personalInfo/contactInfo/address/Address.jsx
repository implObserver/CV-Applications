import { State } from "../../../../../prototypes/toggle/Toggle";
import { DefaultResume, ResumeUpdater } from "../../../../ResumeUpdater";
import Fields from '../../../../../JSON/Fields.json'

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