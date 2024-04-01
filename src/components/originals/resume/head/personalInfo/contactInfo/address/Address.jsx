import { State } from "../../../../../../prototypes/state/State";
import { Props } from "../../../../../../dataManagments/props/Global";

export const Address = () => {
    const props = Props.states.personalDetails;
    const activePlace = props.objects.activePlace;
    const update = State(activePlace.getValues()[3]);

    Object.assign(Props.states.resumeUpdater[props.id][activePlace.getKey()], { address: update });

    return (
        <>
            <div className='address'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}