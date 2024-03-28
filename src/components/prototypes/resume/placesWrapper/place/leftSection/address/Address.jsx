import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const AddressField = ({ id, section }) => {
    const udpate = State(section.getValues()[4]);

    Object.assign(Props.states.resumeUpdater[id][section.getKey()], { location: udpate });

    return (
        <>
            <span className="address__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}