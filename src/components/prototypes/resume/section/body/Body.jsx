import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../dataManagments/props/Global";
import { State } from "../../../state/State";
import { ResumePlacesWrapper } from "../../placesWrapper/PlacesWrapper"

export const ResumeSectionBody = () => {
    const props = usePropsContext();
    const trigger = State();

    Object.assign(Props.states.resumeUpdater, { [props.id]: { trigger: trigger } });

    const sections = props.places;
    const fill = sections.map((section) => {
        return <ResumePlacesWrapper key={section.getKey()} section={section}></ResumePlacesWrapper>;
    })

    return (
        <>
            <div className="resume__section__body">
                {fill}
            </div>
        </>
    )
}