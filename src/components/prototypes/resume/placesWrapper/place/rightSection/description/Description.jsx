import { ResumeUpdater } from "../../../../../../resume/ResumeUpdater";
import { State } from "../../../../../toggle/Toggle";

export const DescriptionField = ({ id, props, section }) => {
    const udpate = State(section.getValues()[5]);
    Object.assign(ResumeUpdater[id][section.getKey()], { description: udpate });

    return (
        <>
            <span className="description__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}