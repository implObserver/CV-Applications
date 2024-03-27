import { generateKey } from "../../../../helper/KeyGenerator";
import { ResumeUpdater } from "../../../../resume/ResumeUpdater";
import { State } from "../../../toggle/Toggle";
import { ResumePlacesWrapper } from "../../placesWrapper/PlacesWrapper"

export const ResumeSectionBody = ({ id, props }) => {
    const trigger = State();
    Object.assign(ResumeUpdater, { [id]: { trigger: trigger } });
    console.log(id)
    const sections = props.states[id].places;
    console.log(ResumeUpdater)
    const fill = sections.map((section) => {
        return <ResumePlacesWrapper key={section.getKey()} id={id} props={props} section={section}></ResumePlacesWrapper>;
    })

    return (
        <>
            <div className="resume__section__body">
                {fill}
            </div>
        </>
    )
}