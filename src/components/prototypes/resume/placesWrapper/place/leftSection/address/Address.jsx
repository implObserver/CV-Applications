import { ResumeUpdater } from "../../../../../../resume/ResumeUpdater";
import { State } from "../../../../../toggle/Toggle";

export const AddressField = ({ id, props, section }) => {
    const udpate = State(section.getValues()[4]);
    Object.assign(ResumeUpdater[id][section.getKey()], { location: udpate });
    return (
        <>
            <span className="address__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}