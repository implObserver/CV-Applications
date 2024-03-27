import { ResumeUpdater } from "../../../../../../resume/ResumeUpdater";
import { State } from "../../../../../toggle/Toggle";

export const PlaceField = ({ id, props, section }) => {
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