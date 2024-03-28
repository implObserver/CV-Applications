import { Props } from "../../../../dataManagments/props/Global";
import { State } from "../../../state/State";
import { ResumePlacesWrapper } from "../../placesWrapper/PlacesWrapper"

export const ResumeSectionBody = ({ id }) => {
    const props = Props.states[id];
    const trigger = State();
    console.log(id)

    Object.assign(Props.states.resumeUpdater, { [id]: { trigger: trigger } });

    const sections = props.places;
    const fill = sections.map((section) => {
        return <ResumePlacesWrapper key={section.getKey()} id={id} section={section}></ResumePlacesWrapper>;
    })

    return (
        <>
            <div className="resume__section__body">
                {fill}
            </div>
        </>
    )
}