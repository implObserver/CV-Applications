import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const InfoField = ({ id, section }) => {
    const udpate = State(section.getValues()[1]);

    Object.assign(Props.states.resumeUpdater[id][section.getKey()], { info: udpate });

    return (
        <>
            <span className="info__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}