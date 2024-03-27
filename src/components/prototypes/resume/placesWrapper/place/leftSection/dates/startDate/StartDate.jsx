import { ResumeUpdater } from "../../../../../../../resume/ResumeUpdater";
import { State } from "../../../../../../toggle/Toggle";

export const StartDate = ({ id, props, section }) => {
    const udpate = State(section.getValues()[2]);
    Object.assign(ResumeUpdater[id][section.getKey()], { startDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}