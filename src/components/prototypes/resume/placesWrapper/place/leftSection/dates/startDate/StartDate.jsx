import { Props } from "../../../../../../../dataManagments/props/Global";
import { State } from "../../../../../../state/State";

export const StartDate = ({ id, section }) => {
    const udpate = State(section.getValues()[2]);

    Object.assign(Props.states.resumeUpdater[id][section.getKey()], { startDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}