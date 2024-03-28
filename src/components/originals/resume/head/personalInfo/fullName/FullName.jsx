import { State } from "../../../../../prototypes/state/State"
import { Props } from "../../../../../dataManagments/props/Global";

export const FullName = () => {
    const props = Props.states.personalDetails;
    const activePlace = props.activePlace;
    const update = State(activePlace.getValues()[0]);

    Object.assign(Props.states.resumeUpdater[props.id][activePlace.getKey()], { fullName: update });

    console.log(update.getState())
    return (
        <>
            <div className="full__name">
                <h1>{update.getState()}</h1>
            </div>
        </>
    )
}