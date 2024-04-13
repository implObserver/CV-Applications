import { appModel } from "../../../../../main";
import { FieldParametersContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { State } from "../../../state/State";
import { ResumePlacesWrapper } from "../../placesWrapper/PlacesWrapper"

export const ResumeSectionBody = () => {
    const props = usePropsContext();
    const trigger = State();
    const sections = props.dropdownLists[`${props.id}__places`].objects.elements;

    Object.assign(appModel.resume.updater, { [props.id]: { trigger: trigger } });

    const fill = sections.map((section) => {
        return (
            <FieldParametersContext.Provider key={section.getKey()} value={section}>
                <ResumePlacesWrapper></ResumePlacesWrapper>
            </FieldParametersContext.Provider>
        );
    })

    return (
        <>
            <div className="resume__section__body">
                {fill}
            </div>
        </>
    )
}