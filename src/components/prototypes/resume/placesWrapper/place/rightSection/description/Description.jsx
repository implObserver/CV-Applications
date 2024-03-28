import { ResumeUpdater } from "../../../../../../dataManagments/stateTemplates/ResumeUpdater";
import { State } from "../../../../../state/State";

export const DescriptionField = ({ id, section }) => {
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