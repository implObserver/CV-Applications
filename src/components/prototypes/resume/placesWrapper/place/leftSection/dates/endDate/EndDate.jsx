import { ResumeUpdater } from "../../../../../../../dataManagments/stateTemplates/ResumeUpdater";
import { State } from "../../../../../../state/State";

export const EndDate = ({ id, section }) => {
    const udpate = State(section.getValues()[3]);
    console.log(section.getValues())
    Object.assign(ResumeUpdater[id][section.getKey()], { endDate: udpate });
    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}