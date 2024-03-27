import { State } from "../../../../prototypes/toggle/Toggle"
import { ResumeUpdater } from "../../../ResumeUpdater";

export const FullName = ({ props }) => {
    const activePlace = props.states.personalDetails.activePlace;
    const update = State(activePlace.getValues()[0]);
    Object.assign(ResumeUpdater[props.states.personalDetails.id][activePlace.getKey()], { fullName: update });
    console.log(update.getState())
    return (
        <>
            <div className="full__name">
                <h1>{update.getState()}</h1>
            </div>
        </>
    )
}