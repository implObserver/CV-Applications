import { ResumeUpdater } from "../../../../../../../resume/ResumeUpdater";
import { State } from "../../../../../../toggle/Toggle";

export const EndDate = ({ id, props, section }) => {
    const udpate = State(section.getValues()[3]);
    console.log(section.getValues())
    Object.assign(ResumeUpdater[id][section.getKey()], { endDate: udpate });
    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}