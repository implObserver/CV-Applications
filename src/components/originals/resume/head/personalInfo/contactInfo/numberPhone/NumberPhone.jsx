import { State } from "../../../../../../prototypes/state/State";
import { Props } from "../../../../../../dataManagments/props/Global";

export const NumberPhone = () => {
    const props = Props.states.personalDetails;
    const activePlace = props.activePlace;
    const update = State(activePlace.getValues()[2]);

    Object.assign(Props.states.resumeUpdater[props.id][activePlace.getKey()], { numberPhone: update });

    return (
        <>
            <div className='number__phone'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}