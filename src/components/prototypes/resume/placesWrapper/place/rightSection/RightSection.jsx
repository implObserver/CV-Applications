import { DescriptionField } from "./description/Description"
import { InfoField } from "./info/InfoField"
import { PlaceField } from "./placeField/PlaceField"

export const RightSection = ({ id, props, section }) => {
    return (
        <>
            <div className="resume__place__right-section">
                <PlaceField id={id} props={props} section={section}></PlaceField>
                <InfoField id={id} props={props} section={section}></InfoField>
                {(() => {
                    if (id === 'experience') {
                        return <DescriptionField id={id} props={props} section={section}></DescriptionField>
                    }
                })()}
            </div>
        </>
    )
}