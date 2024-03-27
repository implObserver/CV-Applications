import { ResumeUpdater } from "../../../../../../resume/ResumeUpdater";
import { State } from "../../../../../toggle/Toggle";

export const InfoField = ({ id, props, section }) => {
    const udpate = State(section.getValues()[1]);
    Object.assign(ResumeUpdater[id][section.getKey()], { info: udpate });
    return (
        <>
            <span className="info__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}