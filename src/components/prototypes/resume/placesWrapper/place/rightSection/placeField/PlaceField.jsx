import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const PlaceField = ({ id, section }) => {
    const udpate = State(section.getValues()[0]);

    Object.assign(Props.states.resumeUpdater[id][section.getKey()], { place: udpate });

    return (
        <>
            <span className="place__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}