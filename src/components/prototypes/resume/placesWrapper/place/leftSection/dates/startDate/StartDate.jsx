import { ResumeUpdater } from "../../../../../../../dataManagments/stateTemplates/ResumeUpdater";
import { State } from "../../../../../../state/State";

export const StartDate = ({ id, section }) => {
    const udpate = State(section.getValues()[2]);
    Object.assign(ResumeUpdater[id][section.getKey()], { startDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}