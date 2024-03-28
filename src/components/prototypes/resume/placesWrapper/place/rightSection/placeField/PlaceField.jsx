import { ResumeUpdater } from "../../../../../../dataManagments/stateTemplates/ResumeUpdater";
import { State } from "../../../../../state/State";

export const PlaceField = ({ id, section }) => {
    const udpate = State(section.getValues()[0]);
    Object.assign(ResumeUpdater[id][section.getKey()], { place: udpate });

    return (
        <>
            <span className="place__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}