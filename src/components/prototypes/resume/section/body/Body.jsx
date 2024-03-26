import { generateKey } from "../../../../helper/KeyGenerator";
import { later } from "../../../../helper/Timeout";
import { ResumePlacesWrapper } from "../../placesWrapper/PlacesWrapper"

export const ResumeSectionBody = ({ id, props }) => {
    const sections = props.states.education.places;

    const fill = sections.map((section) => {
        return <ResumePlacesWrapper key={`${generateKey(section.getKey())}`} id={id}></ResumePlacesWrapper>;
    })

    return (
        <>
            <div className="resume__section__body">
                {fill}
            </div>
        </>
    )
}