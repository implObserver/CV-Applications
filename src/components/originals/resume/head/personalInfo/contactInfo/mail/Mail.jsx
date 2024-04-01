import { State } from "../../../../../../prototypes/state/State";
import { Props } from "../../../../../../dataManagments/props/Global";

export const Mail = () => {
    const props = Props.states.personalDetails;
    const activePlace = props.objects.activePlace;
    const update = State(activePlace.getValues()[1]);

    Object.assign(Props.states.resumeUpdater[props.id][activePlace.getKey()], { mail: update });

    return (
        <>
            <div className='mail'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}